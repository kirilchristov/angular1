import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `, //You can specify template like this (remove URL from TemplateUrl)
  templateUrl: './servers.component.html', // this is the default
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName:string = 'initial'
  serverCreationStatus = `The server was created with initial name ${this.serverName}`
  

  constructor() {
    console.log('initial Servername State',this.serverName)
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    console.log('Yeah, I\'ve been summoned')
    this.serverCreationStatus = 'The server was created'
  }

  onUpdateServerName(value:string) {
    this.serverName = value
    console.log(this.serverName)
  }

}
