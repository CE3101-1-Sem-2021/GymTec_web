import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonInterface } from 'src/app/models/button-interface';
import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  @Input() headerButtons!: ButtonInterface[];
  @Input() links!: string[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showProfile() {
    this.raiseEvent.emit({
      eventID: 'showProfile',
      attached: null
    })
  }

  buttonClick(button: string) {
    let text = "";
    if(button === 'First') {
      this.router.navigateByUrl(this.links[0]);
    }
    else {
      this.router.navigateByUrl(this.links[1]);
    }
    
  }
}