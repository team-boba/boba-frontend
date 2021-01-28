import { Component, OnInit } from '@angular/core';
import { HireStoreService } from './../../shared/hire/hire-store.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../../../employee/domain/profile/Person.model';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  person$: Observable<Person>;

  constructor(
    private hireStoreService: HireStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.hireStoreService.applicationId = params['applicationId'];
      this.hireStoreService.loadPerson(params['applicationId']);
      this.person$ = this.hireStoreService.getPerson();
    });
  }

}
