import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId: number = 10;
  status: string = 'Offline';
  serverStatus: boolean = false;

  constructor() {
    this.status = Math.random() > 0.5 ? 'Online' : 'Offline'
  }

  onStatusChange() {
    this.serverStatus = !this.serverStatus
    this.status = this.serverStatus ? 'Online' : 'Offline'
  }

  getColor() {
    return this.status === 'Online' ? 'green' : 'red'
  }
}