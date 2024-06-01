import { Routes } from '@angular/router';
import {ClientHomeComponent} from "./components/client/client-home/client-home.component";
import { ClientLoginComponent } from './components/client/client-login/client-login.component';
import { ClientProfileComponent } from './components/client/client-profile/client-profile.component';
import { ClientRegistrationComponent } from './components/client/client-registration/client-registration.component';
import { PsyListComponent } from './components/client/psy-list/psy-list.component';
import { PsyComponent } from './components/client/psy/psy.component';

export const routes: Routes = [
  { path: '', component: ClientHomeComponent },
  { path: 'client/registration', component: ClientRegistrationComponent },
  { path: 'client/login', component: ClientLoginComponent },
  { path: 'client/profile', component: ClientProfileComponent },
  { path: 'client/psylist', component: PsyListComponent },
  { path: 'client/psylist/psy', component: PsyComponent },
  { path: '**', component: ClientHomeComponent, redirectTo: '' }
];
