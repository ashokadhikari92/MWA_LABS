import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './../user/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class CheckUserGuard implements CanActivate {
  constructor(private router: Router,private users: DataService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user = JSON.parse(this.users.getCachedData()).results.find((user) => user.login.uuid == route.params.id);
      if(user){
        return true;
      }
      return this.router.navigate(['error']);
  }
}
