import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Product } from "src/app/models/product";
import { EventData } from "src/app/models/event-data";
import { MenuOption } from "src/app/models/menu-option";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu-option",
  templateUrl: "./menu-option.component.html",
  styleUrls: ["./menu-option.component.scss"],
})
export class MenuOptionComponent implements OnInit {
  @Input() menuOptionData!: MenuOption;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToView() {
    this.router.navigateByUrl(this.menuOptionData.url);
  }
}
