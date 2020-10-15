import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  serverCreationStatus = 'No server was created.'
  serverName = '';
  serverCreated = false;
  servers= ['Test Server', 'Test 2 Server']

  constructor() { 
    // setTimeout(()=>{
    //   this.allowNewServer = true
    // }, 2000)
  }

  ngOnInit(): void {
  }
  onUpdateServerName(e) {
    console.log(e.target.value)
    this.serverName = (<HTMLInputElement>e.target).value
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created. ' + 'Server name is: ' + this.serverName
    this.servers.push(this.serverName)
    this.serverName = ''
    this.serverCreated = true
  }
  allowNewServer() {
    this.serverName.length > 1 ? false : true
  }
}
