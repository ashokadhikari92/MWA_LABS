import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RootComponent } from './root.component';
import { UserDetailComponent } from './user/detail/detail.component';
import { CheckUserGuard } from './guards/check-user.guard';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: "" , component: RootComponent},
  {path: "users", component: UserComponent},
  {
    path: "users/detail/:id", 
    component: UserDetailComponent,
    canActivate: [CheckUserGuard]
  },
  {path: 'error', component: ErrorComponent},
  {path: '*', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
