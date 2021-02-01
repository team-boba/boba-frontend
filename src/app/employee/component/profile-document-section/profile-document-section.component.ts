import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-profile-document-section',
  templateUrl: './profile-document-section.component.html',
  styleUrls: ['./profile-document-section.component.css']
})
export class ProfileDocumentSectionComponent implements OnInit {
  @Input() personalDocuments;
  role: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

  navigatePersonalDocumentForm() {
    this.router.navigate(['/employee/personal-document-form'])
  }
}
