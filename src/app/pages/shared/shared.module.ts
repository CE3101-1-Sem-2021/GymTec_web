import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatRadioModule } from "@angular/material/radio";

import { SideMenuComponent } from "./side-menu/side-menu.component";
import { DropDownComponent } from "./drop-down/drop-down.component";
import { HeaderComponent } from "./header/header.component";
import { InfoCardComponent } from "./info-card/info-card.component";
import { EditCardComponent } from "./edit-card/edit-card.component";
import { SelectComponent } from './select/select.component';
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

@NgModule({
  declarations: [
    SideMenuComponent,
    DropDownComponent,
    HeaderComponent,
    InfoCardComponent,
    EditCardComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatSelectModule,
    CalendarModule,
    SideMenuComponent,
    HeaderComponent,
    DropDownComponent,
    SelectComponent
  ]
})
export class SharedModule {}
