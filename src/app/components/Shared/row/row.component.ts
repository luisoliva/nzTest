import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() oUser:any={};
  constructor() { }

  ngOnInit() {
    console.log(this.oUser);
  }

}
