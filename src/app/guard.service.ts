import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private _route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
     alert("You are not admin");
     this._route.navigate(["/"]);
     return false;
  }
}
