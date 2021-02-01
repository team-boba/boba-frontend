import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-profile-employment-section',
  templateUrl: './profile-employment-section.component.html',
  styleUrls: ['./profile-employment-section.component.css']
})
export class ProfileEmploymentSectionComponent implements OnInit {
  @Input() avatar: string;
  @Input() employeeTitle: string;
  @Input() visaType: string;
  @Input() visaStartDate: string;
  @Input() visaEndDate: string;
  @Input() employmentStartDate: string;
  @Input() employmentEndDate: string;
  role: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

  navigateEmployeeForm() {
    this.router.navigate(['/employee/employee-form'])
  }
}
