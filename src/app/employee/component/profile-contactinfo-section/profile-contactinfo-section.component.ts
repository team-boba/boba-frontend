import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateContactForm() {
    this.router.navigate(['/employee/contact-form'])
  }
}
