import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alertSuccess(message: string,) {
    Swal.fire({
      text: message,
      icon: 'success',
      timer: 2000
    })
  }

  alertError(message: string) {
    Swal.fire({
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
}
