import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(
    private _router: Router
  ) {
  }

  /**
   * it is called to check user login status to show the destined page or not.
   */
  canActivate(): Observable<boolean> {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      this._router
        .navigate(['/auth/login'], {
          state: { previousUrl: this._router.routerState?.snapshot?.url }
        })
        .then();
      return of(false)
    }
    return of(true)
  }
}
