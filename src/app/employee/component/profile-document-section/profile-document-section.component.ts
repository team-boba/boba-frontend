import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-document-section',
  templateUrl: './profile-document-section.component.html',
  styleUrls: ['./profile-document-section.component.css']
})
export class ProfileDocumentSectionComponent implements OnInit {
  @Input() personalDocuments;

  constructor() { }

  ngOnInit(): void {
  }

}
