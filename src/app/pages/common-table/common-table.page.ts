import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.page.html',
  styleUrls: ['./common-table.page.scss'],
})
export class CommonTablePage implements OnInit {

  @Input() parentdataSMAR:any;
  parentData:any;
  constructor() { }

  ngOnInit() {
    console.log("parentdataSMAR",this.parentdataSMAR);
    
  }


}
