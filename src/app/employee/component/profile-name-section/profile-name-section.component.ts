import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-name-section',
  templateUrl: './profile-name-section.component.html',
  styleUrls: ['./profile-name-section.component.css']
})
export class ProfileNameSectionComponent implements OnInit {
  @Input() fullName: string;
  @Input() email: string;
  @Input() cellphone: string;
  @Input() gender: string;
  @Input() ssnFourDigits: string;
  @Input() dob: string;  

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  navigatePersonForm() {
    this.router.navigate(['/employee/person-form'])
  }
}
