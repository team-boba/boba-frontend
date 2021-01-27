import { Router } from '@angular/router';
import { ProfileBackendService } from './profile-backend.service';
import { Person } from './../../domain/Person/Person.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileStoreService {
  userId: number;
  houseId: number;
  person$: BehaviorSubject<Person> = new BehaviorSubject(null);
  
  constructor(
    private profileBackendService: ProfileBackendService,
    private router: Router
  ) { }

  setUserIdHouseId(userId: number, houseId: number) {
    this.userId = userId;
    this.houseId = houseId;
  }

  loadPerson(userId: number) {
    this.profileBackendService.getPersonResponse(userId)
      .subscribe(
        (personResponse) => {
          if (personResponse.serviceStatus.success) {
            let person = personResponse.person;
            this.person$.next(person);
            console.log(this.person$.getValue())
          } else {
            alert("You have not start onboarding application.");
            this.router.navigate(['/employee/person-form']);
          }
        },
        err => console.log("error retrieving person with userId.")
      )
  }
}
