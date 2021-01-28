import { Component, OnInit } from '@angular/core';
import { ApplicationWorkflow } from './../../../domain/application-workflow.model';
import { HireStoreService} from './../../../shared/hire/hire-store.service'
import { HireBackendService} from './../../../shared/hire/hire-backend.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Person } from '../../../../employee/domain/profile/Person.model';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  person$: Observable<Person>;
  person: Person;
  applicationWorkFlow$: Observable<ApplicationWorkflow>;
  applicationWorkFlow: ApplicationWorkflow;
  applicationId: number;
  comments = '';
  status = 'pending';

  constructor(
    private hireStoreService: HireStoreService,
    private hireBackendService: HireBackendService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.applicationId = id;
    this.hireStoreService.applicationId = id;
    this.hireStoreService.loadPerson(id);
    this.person$ = this.hireStoreService.getPerson();

    this.getPersonData();
    console.log(this.person);
    this.getCurrentApplication();
    this.comments = this.applicationWorkFlow.comments;
    this.status = this.applicationWorkFlow.status;

    this.route.params
      .subscribe(
        (params: Params) => {
          this.applicationId = +params['id'];
          this.hireStoreService.applicationId = +params['id'];
          this.hireStoreService.loadPerson(+params['id']);
          this.person$ = this.hireStoreService.getPerson();

          this.getPersonData();
          this.getCurrentApplication();
          this.comments = this.applicationWorkFlow.comments;
          this.status = this.applicationWorkFlow.status;
        }
      );
  }

  getPersonData() {
    this.person$.subscribe(
      response => {
        // console.log(response);
        this.person = response;
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }

  getCurrentApplication() {
    this.hireStoreService.getApplicationWorkflow(this.applicationId).subscribe(
      response => {
        // console.log(response);
        this.applicationWorkFlow = response;
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );

  }
  
  onUpdate() {
    console.log(this.applicationId);
    console.log(this.comments);
    console.log(this.status);

    // this.applicationWorkFlow = new ApplicationWorkflow(this.applicationId, '', '', this.status, this.comments, '');
    this.applicationWorkFlow.comments = this.comments;
    this.applicationWorkFlow.status = this.status;

    this.hireBackendService.updateApplicationStatus(this.applicationWorkFlow).subscribe();;
    // this.changesSaved = true;
    this.router.navigate(['/hr/hire']);
  }

}
