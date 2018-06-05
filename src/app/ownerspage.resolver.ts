import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Owner } from '/owner';
import { OwnerService } from './owner.service';

@Injectable()
export class OwnerspageResolver implements Resolve<Owner> {
  constructor(private ownerService: OwnerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Owner> {
    return this.ownerService.getOwner(route.params['name']);
  }
}
