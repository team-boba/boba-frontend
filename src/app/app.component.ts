import { AuthService } from './shared/auth/auth.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faLaptopHouse, faGlobe, faUserEdit, faRegistered, faSignOutAlt, faPersonBooth, faHouseUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed = true; 
  role: string;
  faLaptopHouse = faLaptopHouse; 
  faGlobe = faGlobe;
  faUserEdit = faUserEdit;
  faRegistered = faRegistered;
  faSignOutAlt = faSignOutAlt;
  faPersonBooth = faPersonBooth;
  faHouseUser = faHouseUser;

  constructor(
    private location: Location,
    private authService: AuthService
  ) {}
  
  ngOnInit() {
    this.role = this.getRole(this.location.path());
    this.authService.setRole(this.role);
  }

  getRole(url): string {
    let role;
    let firstIdx = url.indexOf("/")+1;
    let lastIdx = url.lastIndexOf("/")+1;

    if (firstIdx===lastIdx) {
      role = url.substring(firstIdx);
    } else {
      role = url.substring(firstIdx, lastIdx-1);
    }

    return role;
  }
}
