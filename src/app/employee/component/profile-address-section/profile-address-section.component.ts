import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-address-section',
  templateUrl: './profile-address-section.component.html',
  styleUrls: ['./profile-address-section.component.css']
})
export class ProfileAddressSectionComponent implements OnInit {
  @Input() addressLineOne: string;
  @Input() addressLineTwo: string;
  @Input() city: string;
  @Input() zipcode: string;
  @Input() fullState: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateAddressForm() {
    this.router.navigate(['/employee/address-form'])
  }
}
