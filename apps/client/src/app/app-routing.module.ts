import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginGuardService} from '@angular-test/core';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardService],
    loadChildren: () => import('@angular-test/client/pages').then((m) => m.ClientPagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@angular-test/auth').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
