import { Component, OnInit } from '@angular/core';

@Component({
  //css selector
  //selector: 'app-servers',
  // attribute selector
  //selector: '[app-servers]',
  // selectorby using class
  selector: '.app-servers',
  // we can call our component like this
  // template: `<aap-server><aap-server><aap-server><aap-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'TestServer';
  servercreatedStatus = 'no server was created';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onServerCreate(){
    this.servercreatedStatus = 'server is created'+this.onUpdateServerName.bind(Event);
    
  }
  onUpdateServerName(event: InputEvent){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
