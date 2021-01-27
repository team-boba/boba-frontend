import { Router } from '@angular/router';
import { ProfileBackendService } from './profile-backend.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../../domain/profile/Person.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileStoreService {
  userId: number;
  person$: BehaviorSubject<Person> = new BehaviorSubject(null);
  
  constructor(
    private profileBackendService: ProfileBackendService,
    private router: Router
  ) { }

  setUserId(userId: number) {
    this.userId = userId;
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
            alert("You have not started your onboarding application.");
            this.router.navigate(['/employee/person-form']);
          }
        },
        err => console.log("error retrieving person with userId.")
      )
  }
}
