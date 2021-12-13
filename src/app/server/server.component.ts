import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  username = '';
  constructor() {}

  ngOnInit(): void {}

  clickDisabled() {
    if (this.username !== '') {
      return false;
    } else {
      return true;
    }
  }
  resetUser() {
    this.username = '';
  }
}
