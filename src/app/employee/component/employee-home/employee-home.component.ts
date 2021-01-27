import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { ProfileStoreService } from './../../shared/profile/profile-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(
    private profileStoreService: ProfileStoreService,
    private onboardingStoreService: OnboardingStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let userId = this.route.snapshot.params['userId'];
    let houseId = this.route.snapshot.queryParams['houseId'];
    this.onboardingStoreService.setUserId(userId);
    this.onboardingStoreService.setHouseId(houseId);

    this.profileStoreService.setUserId(userId);
    this.profileStoreService.loadPerson(userId);
  }

}
