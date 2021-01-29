import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
