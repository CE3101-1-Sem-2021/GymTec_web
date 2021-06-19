import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/pages/shared/shared.module";

import { MatRadioModule } from "@angular/material/radio";
@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, MatRadioModule],
})
export class LoginModule {}
