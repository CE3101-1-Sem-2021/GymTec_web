import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { HeaderComponent } from './header/header.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';



@NgModule({
  declarations: [
    SharedComponent,
    SideMenuComponent,
    DropDownComponent,
    HeaderComponent,
    InfoCardComponent,
    EditCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
