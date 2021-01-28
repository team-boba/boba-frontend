import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { Person } from './../../../../employee/domain/profile/Person.model'

@Injectable({
  providedIn: 'root'
})
export class UpdateStatusResolverService{

  constructor() { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
  //   return this.serversService.getServer(+route.params['id']);
  // }
}
