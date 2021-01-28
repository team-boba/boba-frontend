import { Component, OnInit } from '@angular/core';
import { ApplicationWorkflow } from './../../../domain/application-workflow.model';
import { HireStoreService} from './../../../shared/hire/hire-store.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  // applicationWorkflow$: Observable<ApplicationWorkflow>;

  // applicationWorkflow: ApplicationWorkflow;
  comments = '';
  status = 'Rejected';
  applicationId: number;

  constructor(private hireStoreService: HireStoreService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.applicationId = +this.route.snapshot.params['id'];
    // this.applicationWorkflow$ = this.hireStoreService.getApplicationWorkflow(id);
    
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.applicationWorkflow$ = this.hireStoreService.getApplicationWorkflow(+params['id']);
    //   }
    // );
  }

  onUpdate() {
    console.log(this.applicationId);
    console.log(this.comments);
    console.log(this.status);
    // this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    // this.changesSaved = true;
    // this.router.navigate(['../'], {relativeTo: this.route});
  }

}
