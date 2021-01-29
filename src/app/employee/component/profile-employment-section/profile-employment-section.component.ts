import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-employment-section',
  templateUrl: './profile-employment-section.component.html',
  styleUrls: ['./profile-employment-section.component.css']
})
export class ProfileEmploymentSectionComponent implements OnInit {
  @Input() employeeTitle: string;
  @Input() visaType: string;
  @Input() visaStartDate: string;
  @Input() visaEndDate: string;
  @Input() employmentStartDate: string;
  @Input() employmentEndDate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
