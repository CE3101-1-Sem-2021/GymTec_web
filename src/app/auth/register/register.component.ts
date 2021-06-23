import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrPcdService } from 'cr-pcd';
import { Client } from 'src/app/models/client';

import { EventData } from 'src/app/models/event-data';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newClient: Client = new Client();

  constructor(private clientService: ClientService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {}

  register() {
    if(this.newClient.nombre != '' && this.newClient.apellidos != '' && this.newClient.cedula != '' && this.newClient.edad != 0 && this.newClient.fechaNacimiento != '' && this.newClient.peso != 0 && this.newClient.imc != 0 && this.newClient.direccion != '' && this.newClient.email != '' && this.newClient.password != ''){
      this.clientService.registerClient(this.newClient).then((response) => {
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.alertService.alertSuccess('Clase creada exitosamente.')
        this.clientService.token = result;
        this.router.navigateByUrl("/pages/client/home");
        console.log(result);
      })
      .catch(async (err) => {
        err.then((result: any) => {
          console.log(result);
          this.alertService.alertError(result);
        });
      });
    }
    else {

    }
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      case 'Date': {
        let date = new Date($event.attached);
        this.newClient.fechaNacimiento = date.getUTCFullYear().toString() + '-' + (date.getUTCMonth()+1).toString() + '-' + date.getUTCDate().toString();
        break;
      }
    }
  }
}
