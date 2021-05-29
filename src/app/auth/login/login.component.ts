import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Control variables
  view: any;
  email: String = '';
  password: String = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private alertService: AlertService, private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.view = data.view;
    })
  }

  login() {
    if(this.email != '' && this.password != '') {
      //this.authService.login(this.email, this.password, this.view);
      this.router.navigateByUrl('/pages/client/home');
    }
    else {
      this.alertService.alertError('Debe ingresar un correo y contraseña.');
    }
  }

}
