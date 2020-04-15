import { Component } from '@angular/core';

@Component({
  selector: 'aap-server',
  templateUrl: './server.component.html'
  //styleUrls: ['./app.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
      return this.serverStatus+' calling from method';
    }
}