import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/thread.service';
import { Observable } from '../../node_modules/rxjs';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';
  constructor(public threadService: ThreadsService, public sessionService: SessionService){}
  ngOnInit(){
  }
  logout(){
    console.log("logout llamado")
    this.sessionService.logout()
    .subscribe(response => {
      console.log(response)
    })
  }
}