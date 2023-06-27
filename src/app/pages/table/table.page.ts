import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  @Input() parentdataSMAR:any;
  parentSMARData:any;
  constructor() { }

  ngOnInit() {
    console.log("dataSMAR",this.parentdataSMAR);
    this.parentSMARData=this.parentdataSMAR
  }

}
