import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed = true; 
  role: string;

  constructor(
    private location: Location
  ) {}
  
  ngOnInit() {
    this.role = this.getRole(this.location.path());
  }

  getRole(url): string {
    let role;
    let firstIdx = url.indexOf("/")+1;
    let lastIdx = url.lastIndexOf("/")+1;

    if (firstIdx===lastIdx) {
      role = url.substring(firstIdx);
    } else {
      role = url.substring(firstIdx, lastIdx-1);
    }

    return role;
  }
}
