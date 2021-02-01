import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileSummaryStoreService } from './../../shared/profile/profile-summary-store.service';
import { Observable } from 'rxjs';
import { ProfileSummaryRequest } from '../../domain/profile-summary-request.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
  profileSummaryRequests: ProfileSummaryRequest[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private profileSummaryStoreService: ProfileSummaryStoreService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.profileSummaryStoreService.getProfileSummaryRequests()
    .subscribe(data => {
      this.profileSummaryRequests = data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

    
  ngOnDestroy(): void {
    // unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
}
