import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectorComponent } from './selector/selector.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: SelectorComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login-admin',
    component: LoginComponent,
    data: {view: 'Admin'}
  },
  {
    path: 'login-client',
    component: LoginComponent,
    data: {view: 'Client'}
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
