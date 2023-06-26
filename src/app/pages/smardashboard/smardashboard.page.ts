import { Component, OnInit } from '@angular/core';



export interface SMARDetails {
  serial_no: number;
  policy_number: string;
  customer_name:string;
  agent_code: number;
  submitted_on:Date;
}

@Component({
  selector: 'app-smardashboard',
  templateUrl: './smardashboard.page.html',
  styleUrls: ['./smardashboard.page.scss'],
})
export class SmardashboardPage implements OnInit {

  newCasesViewData:SMARDetails[]=[
    {serial_no: 1, policy_number: 'C45612323',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 5, 23)},
    {serial_no: 2, policy_number: 'C45612345',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 6, 23)},
    {serial_no: 3, policy_number: 'C45612338',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 7, 23)},
    {serial_no: 4, policy_number: 'C45612784',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 8, 23)},
    {serial_no: 5, policy_number: 'C45612387',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 9, 23)},
    {serial_no: 6, policy_number: 'C45612389',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 10, 23)},
    {serial_no: 7, policy_number: 'C45612389',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 11, 23)},
    {serial_no: 8, policy_number: 'C45612897',customer_name:'DAN GRIP',agent_code:9632145789,submitted_on:new Date(2023, 12, 23)},

   ]


  constructor() { }

  ngOnInit() {
  }

}
