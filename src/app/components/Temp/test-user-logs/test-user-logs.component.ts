import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-user-logs',
  templateUrl: './test-user-logs.component.html',
  styleUrls: ['./test-user-logs.component.css']
})
export class TestUserLogsComponent implements OnInit {
  logs: Array<string>;
  currentLogSelected: string;

  constructor() {

  }

  ngOnInit() {
    this.logs = new Array<string>();
    this.currentLogSelected = "";

    this.logs.push("log1");
    this.logs.push("log2");
    this.logs.push("log3");
    this.logs.push("log4");
    this.logs.push("log5");

    this.currentLogSelected = this.logs[0];
  }

  setCurrentLogInViewer(log: string){
    this.currentLogSelected = log;
  }


}
