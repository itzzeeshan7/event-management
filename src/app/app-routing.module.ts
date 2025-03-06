import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent ,  canActivate: [authGuard]},
  { path: 'register', component: RegisterComponent ,  canActivate: [authGuard] },
  { path: 'events', component: EventListComponent , canActivate: [authGuard] },
  { path: 'event-form', component:EventFormComponent ,  canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
