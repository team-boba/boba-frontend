import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { ProfileStoreService } from './../../shared/profile/profile-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../../domain/profile/Person.model';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  person$: Observable<Person>;

  constructor(
    private profileStoreService: ProfileStoreService,
    private onboardingStoreService: OnboardingStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.onboardingStoreService.userId = params['userId'];
      this.onboardingStoreService.houseId = params['houseId'];
      this.profileStoreService.userId = params['userId'];
      this.profileStoreService.loadPerson(params['userId']);
      this.person$ = this.profileStoreService.getPerson();
    });
  }

}
