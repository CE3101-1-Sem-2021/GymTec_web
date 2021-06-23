import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonInterface } from 'src/app/models/button-interface';
import { Class } from 'src/app/models/calendar/class';
import { EventData } from 'src/app/models/event-data';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  // Header buttons
  buttons: ButtonInterface[] = [{
    text: 'Dashboard',
    icon: '../../../assets/icons/dashboard.svg'
  },
  {
    text: 'Available classes',
    icon: '../../../assets/icons/management.svg'
  }];
  urlButtons = ['/pages/client/home', '/pages/client/available-classes'];

  constructor(private route: Router, private clientService: ClientService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.route.navigateByUrl('/pages/client/home');
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
    }
  }

  getAllClasses() {
    this.clientService.getClasses().then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.clientService.allClasses = JSON.parse(result) as [Class];
      console.log(this.clientService.allClasses);
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

}
