import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  serverName: string = '';
  serverCreated: boolean = false;
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';

  servers = ['Server 1', 'Server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
