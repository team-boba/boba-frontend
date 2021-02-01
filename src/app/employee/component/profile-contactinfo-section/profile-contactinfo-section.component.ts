import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-profile-contactinfo-section',
  templateUrl: './profile-contactinfo-section.component.html',
  styleUrls: ['./profile-contactinfo-section.component.css']
})
export class ProfileContactinfoSectionComponent implements OnInit {
  @Input() referenceTitle: string;
  @Input() referenceRelationship: string;
  @Input() emergencyTitle: string;
  @Input() emergencyRelationship: string;
  role: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

  navigateContactForm() {
    this.router.navigate(['/employee/contact-form'])
  }
}
