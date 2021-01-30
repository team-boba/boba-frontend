import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-document-section',
  templateUrl: './profile-document-section.component.html',
  styleUrls: ['./profile-document-section.component.css']
})
export class ProfileDocumentSectionComponent implements OnInit {
  @Input() personalDocuments;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigatePersonalDocumentForm() {
    this.router.navigate(['/employee/personal-document-form'])
  }
}
