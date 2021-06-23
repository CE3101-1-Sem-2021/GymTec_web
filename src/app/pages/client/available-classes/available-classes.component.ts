import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/calendar/class';
import { EventData } from 'src/app/models/event-data';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-available-classes',
  templateUrl: './available-classes.component.html',
  styleUrls: ['./available-classes.component.scss']
})
export class AvailableClassesComponent implements OnInit {
  allClasses: Class[] = [];
  currentClass: Class = new Class();
  boolSmokeScreen = false;
  boolShowDetails = false;

  constructor(private clientService: ClientService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAllClasses();
  }

  getAllClasses() {
    this.clientService.getClasses().then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.allClasses = JSON.parse(result) as [Class];
      console.log(this.allClasses);
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      case 'showDetails': {
        this.currentClass = $event.attached;
        this.boolSmokeScreen = true;
        this.boolShowDetails = true;
        break;
      }
      case 'return': {
        this.boolShowDetails = false;
        this.boolSmokeScreen = false;
        break;
      }
      case 'subscribe': {
        this.boolSmokeScreen = false;
        this.boolShowDetails = false;
        this.clientService.subscribeToClass($event.attached.Id).then((response) => {
          if (!response.ok) {
            throw new Error(response.toString());
          }
          return response.text();
        })
        .then((result) => {
          this.alertService.alertSuccess('Te has suscrito a la clase');
          this.getAllClasses();
        })
        .catch(async (err) => {
          err.then((result: any) => {
            console.log(result);
            this.alertService.alertError(result);
          });
        });
      }
    }
  }

}
