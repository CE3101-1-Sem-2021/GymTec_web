import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from 'src/app/models/calendar/class';
import { Employee } from 'src/app/models/employee';
import { EventData } from 'src/app/models/event-data';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { BranchOfficeService } from 'src/app/services/branch-office.service';
import { ClassService } from 'src/app/services/class.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  allClasses: Class[] = [];
  newClass: Class = new Class();
  modality = ['Grupal', 'Individual', 'En Parejas'];
  weekDays = ['L', 'K', 'M', 'J', 'V', 'S', 'D'];
  months = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dic'];
  schedules = ['07:00 - 09:00', '08:00 - 10:00', '09:00 - 11:00', '10:00 - 12:00', '11:00 - 13:00', '12:00 - 14:00', '13:00 - 15:00', '14:00 - 16:00', '15:00 - 17:00', '16:00 - 18:00', '17:00 - 19:00', '18:00 - 20:00', '19:00 - 21:00'];
  instructors: Employee[] = [];
  instructorNames: string[] = [];


  constructor(private classService: ClassService, private adminService: AdminService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAllClasses();
    this.getInstructors();
  }

  getAllClasses() {
    this.classService.getClasses(this.adminService.token).then((response) => {
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

  return() {
    this.raiseEvent.emit({
      eventID: 'hideClasses',
      attached: null
    })
  }

  formatDate(date: string) {
    let newDate = new Date(date);
    return this.months[newDate.getMonth()] + '-' + newDate.getUTCDate().toString();
  }

  formatInstructor(instructor: string) {
    if(instructor == null || instructor == '') {
      return '--por definir--';
    }
    else {
      return this.getInstructorName(instructor);
    }
  }

  createClass() {
    console.log(this.newClass);
    console.log(this.allClasses[0]);
    if(this.newClass.Hora_Inicio != '' && this.newClass.Fecha != null && this.newClass.Tipo_Servicio != '' && this.newClass.Hora_Final != ''  && this.newClass.Modalidad != '' && this.newClass.Capacidad != 0) {
      this.newClass.Sucursal = this.getSucursalFromInstructor(this.newClass.Instructor);
      this.classService.createClass(this.adminService.token, this.newClass).then((response) => {
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.getAllClasses();
        this.alertService.alertSuccess('Clase creada exitosamente.')
        this.newClass = new Class();
      })
      .catch(async (err) => {
        err.then((result: any) => {
          console.log(result);
          this.alertService.alertError(result);
        });
      });     
    }
    else {
      this.alertService.alertError('Error al crear la clase, por favor intente de nuevo.')
    }
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      case 'Instructor(a)': {
        this.newClass.Instructor = this.getInstructorID($event.attached);
        break
      };
      case 'Modalidad': {
        this.newClass.Modalidad = $event.attached;
        break;
      };
      case 'Horario': {
        let startTime = $event.attached.slice(0, 5).trim();
        let size = $event.attached.length;
        let endTime = $event.attached.slice(8, size).trim();
        this.newClass.Hora_Inicio = startTime;
        this.newClass.Hora_Final = endTime;
        break;
      };
      case 'Date': {
        let date = new Date($event.attached);
        this.newClass.Fecha = date.getUTCFullYear().toString() + '-0' + (date.getUTCMonth()+1).toString() + '-' + date.getUTCDate().toString();
      }
    }
  }

  getInstructorName(ID: string) {
    let instructorName = '';
    for(const instructor of this.instructors) {
      if(ID === instructor.Cedula) {
        instructorName = instructor.Nombre;
        break;
      }
    }
    return instructorName;
  }
  
  getInstructorID(name: string) {
    let instructorID = '';
    for(const instructor of this.instructors) {
      if(name === instructor.Nombre) {
        instructorID = instructor.Cedula;
        break;
      }
    }
    return instructorID;
  }

  getSucursalFromInstructor(instructorID: string) {
    let sucursal = '';
    for(const instructor of this.instructors) {
      if(instructorID === instructor.Cedula) {
        sucursal = instructor.Sucursal;
        break;
      }
    }
    return sucursal;
  }

  getInstructors() {
    let employees: Employee[] = [];
    this.classService.getEmployees(this.adminService.token).then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      employees = JSON.parse(result) as [Employee];
      for(let employee of employees) {
        if(employee.Puesto == 'Instructor') {
          this.instructors.push(employee);
          this.instructorNames.push(employee.Nombre);
        }
      }
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }
}
