import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {
  logsList: Array<string>;

  constructor() {
    this.logsList = new Array<string>();
  }

  ngOnInit() {
  }

}
