import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonInterface } from 'src/app/models/button-interface';
import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    // Header buttons
    buttons: ButtonInterface[] = [{
      text: 'Dashboard',
      icon: '../../../assets/icons/dashboard.svg'
    },
    {
      text: 'Mangement',
      icon: '../../../assets/icons/management.svg'
    }];
    urlButtons = ['/pages/admin/home', '/pages/admin/management'];

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.navigateByUrl('/pages/admin/home');
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
    }
  }

}
