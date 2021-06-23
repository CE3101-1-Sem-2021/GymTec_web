import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { AlertService } from "../../services/alert.service";
import { AdminService } from "src/app/services/admin.service";
import { FormControl, FormGroup } from "@angular/forms";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  // Control variabless
  view: any;
  email: string = "";
  password: string = "";
  selected = "Administrador";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authService: AdminService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.view = data.view;
    });
  }

  login() {
    if (this.view == "Admin") {
      this.authService.validateCredentials(this.email, this.password, this.selected)
        .then((response) => {
          if (!response.ok) {
            throw response.text();
          }
          return response.text();
        })
        .then((result) => {
          this.authService.token = result;
          this.alertService.alertSuccess("Login exitoso");
          this.router.navigateByUrl("/pages/admin/home");
        })
        .catch(async (err) => {
          err.then((result: any) => {
            console.log(result);
            this.alertService.alertError(result);
          });
        });
    } else if (this.view == "Client") {
      this.clientService.validateCredentials(this.email, this.password)
      .then((response) => {
        if (!response.ok) {
          throw response.text();
        }
        return response.text();
      })
      .then((result) => {
        this.clientService.token = result;
        this.alertService.alertSuccess("Login exitoso");
        this.router.navigateByUrl("/pages/client/home");
      })
      .catch(async (err) => {
        err.then((result: any) => {
          console.log(result);
          this.alertService.alertError(result);
        });
      });
    }
    else {
      this.alertService.alertError("Debe ingresar un correo y contraseña.");
    }
  }
}
