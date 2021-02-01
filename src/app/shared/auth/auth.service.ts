import { CookieService } from 'ngx-cookie-service';
import { SerializeUser } from './../../employee/domain/SerializeUser.model';
import { SerializeUserResponse } from './../../employee/domain/SerializeUserResponse.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  JWT_TOKEN_COOKIE_NAME = "TEAMBOBA-JWT-TOKEN";
  serializeUser: SerializeUser;
  role: string;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private location: Location
  ) { }

  isLoggedIn = false;
  isHrLoggedIn = false;

  isAuthenticated(): Promise<boolean> {
    if (this.isLoggedIn) {
      return Promise.resolve(true);
    };

    let jwtToken = this.cookieService.get(this.JWT_TOKEN_COOKIE_NAME);

    if (!jwtToken) {
      return Promise.resolve(false);
    } else {
      const url = '/2api/auth/is-authenticated-user';
      let locationUrl = this.location.path()
      let urlUserId = +locationUrl.substring(locationUrl.lastIndexOf('/')+1);
      return this.http.post<boolean>(url, {jwt: jwtToken, userId: urlUserId}).toPromise();
    }
  }

  isAuthorized(): Promise<boolean> {
    if (this.isHrLoggedIn) {
      return Promise.resolve(true);
    };

    let jwtToken = this.cookieService.get(this.JWT_TOKEN_COOKIE_NAME);

    if (!jwtToken) {
      return Promise.resolve(false);
    } else {
      const url = '/2api/auth/is-authorized-user';
      return this.http.post<boolean>(url, {jwt: jwtToken, userId: 1}).toPromise();
    }
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  setIsHrLoggedIn(isHrLoggedIn: boolean) {
    this.isHrLoggedIn = isHrLoggedIn;
  }

  getSerializeUserResponse() {
    let jwtToken = this.cookieService.get(this.JWT_TOKEN_COOKIE_NAME);
    const url = '/2api/auth/deserialize-jwt';
    this.http.post<SerializeUserResponse>(url, {jwt: jwtToken}).subscribe(
      (serializeUserResponse: SerializeUserResponse) => {
        if (serializeUserResponse.serviceStatus.success) {
          this.serializeUser = serializeUserResponse.serializeUser;
        }
      }
    )
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}
