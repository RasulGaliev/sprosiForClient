import { Routes } from '@angular/router';
import {ClientHomeComponent} from "./components/client/client-home/client-home.component";
import { ClientLoginComponent } from './components/client-login/client-login.component';

export const routes: Routes = [
  { path: 'client', component: ClientHomeComponent },
  { path: 'client/login', component: ClientLoginComponent },
  // { path: '', component: ClientHomeComponent, redirectTo: 'client' },
  { path: '**', component: ClientHomeComponent, redirectTo: 'client' }
];
