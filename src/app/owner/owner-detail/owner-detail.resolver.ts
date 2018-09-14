import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Owner } from '../../owner';
import { OwnerService } from '../owner-service/owner.service';

@Injectable()
export class OwnerDetailResolver implements Resolve<Owner> {
  constructor(private ownerService: OwnerService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Owner> {
    return this.ownerService.getOwner(route.params['name'])
    // return this.ownerService.getOwner(route.params['name'])
    //   .subscribe(owner => {
    //     if (owner) {
    //       return owner
    //     } else {
    //       console.log(owner)
    //       this.router.navigate(['/owners']);
    //       return false;
    //     }
    //   })
  }
}
