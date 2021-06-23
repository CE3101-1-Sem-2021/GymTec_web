import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonInterface } from 'src/app/models/button-interface';
import { EventData } from 'src/app/models/event-data';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';

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
      text: 'Management',
      icon: '../../../assets/icons/management.svg'
    }];
    urlButtons = ['/pages/admin/home', '/pages/admin/management'];

  constructor(private route: Router, private adminService: AdminService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.route.navigateByUrl('/pages/admin/home');
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case 'generatePayroll': {
        this.getPayroll();
      }
    }
  }

  getPayroll() {
    console.log('Generando planilla');
    this.adminService.generatePayroll().then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.alertService.alertSuccess('Hemos enviado la planilla a tu correo electronico.')
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

}
