import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-name-section',
  templateUrl: './profile-name-section.component.html',
  styleUrls: ['./profile-name-section.component.css']
})
export class ProfileNameSectionComponent implements OnInit {
  @Input() avatar: string;
  @Input() fullName: string;
  @Input() gender: string;
  @Input() ssnFourDigits: string;
  @Input() dob: string;  

  constructor() { }

  ngOnInit(): void {
  }

}
