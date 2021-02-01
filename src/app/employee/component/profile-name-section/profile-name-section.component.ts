import { AuthService } from './../../../shared/auth/auth.service';
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
  role: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

  navigatePersonForm() {
    this.router.navigate(['/employee/person-form'])
  }
}
