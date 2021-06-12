import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../pages/shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";

import { SelectorComponent } from "./selector/selector.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [
    SelectorComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, SharedModule, AuthRoutingModule, MatRadioModule],
})
export class AuthModule {}
