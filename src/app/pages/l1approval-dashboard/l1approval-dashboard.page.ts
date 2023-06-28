import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface SMARDetails {
  serial_no: number;
  policy_number: string;
  agent_code: number;
  agent_name: string;
  agent_contact: string;
  propser_name: string;
  propser_mobile: number;
  video_psc_status: string;
  date:Date;
  source:string;
  anp:number
}

@Component({
  selector: 'app-l1approval-dashboard',
  templateUrl: './l1approval-dashboard.page.html',
  styleUrls: ['./l1approval-dashboard.page.scss'],
})
export class L1approvalDashboardPage implements OnInit {
  searchTerm:any='';
  fromDate: any='';
  toDate: any='';
  pipe:any= DatePipe;
  displayedColumns:string[] = ['serial_no', 'policy_number', 'agent_code', 'agent_name','agent_contact','propser_name','propser_mobile','video_psc_status','date','source','anp'];
  dataSMAR:SMARDetails[]= [
    {serial_no: 1, policy_number: 'C45612389', agent_code: 1234565, agent_name: 'H',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 1),source:'SellOnline',anp:24000},
    {serial_no: 2, policy_number: 'C45612389', agent_code: 4101911, agent_name: 'He',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 2),source:'SellOnline',anp:24000},
    {serial_no: 3, policy_number: 'C45612389', agent_code: 678941, agent_name: 'Li',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 4, policy_number: 'C45612389', agent_code: 9.0122, agent_name: 'Be',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 5, policy_number: 'C45612389', agent_code: 10.811, agent_name: 'B',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 6, policy_number: 'C45612389', agent_code: 12.0107, agent_name: 'C',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 7, policy_number: 'C45612389', agent_code: 14.0067, agent_name: 'N',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 8, policy_number: 'C45612389', agent_code: 15.9994, agent_name: 'O',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 9, policy_number: 'C45612389', agent_code: 18.9984, agent_name: 'F',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 10, policy_number: 'C45612389', agent_code: 20.1797, agent_name: 'Ne',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 11, policy_number: 'C45612389', agent_code: 22.9897, agent_name: 'Na',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 12, policy_number: 'C45612389', agent_code: 24.35, agent_name: 'Mg',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 13, policy_number: 'C45612389', agent_code: 26.9815, agent_name: 'Al',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 14, policy_number: 'C45612389', agent_code: 28.0855, agent_name: 'Si',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 15, policy_number: 'C45612389', agent_code: 30.9738, agent_name: 'P',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 16, policy_number: 'C45612389', agent_code: 32.065, agent_name: 'S',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 17, policy_number: 'C45612389', agent_code: 35.453, agent_name: 'Cl',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 18, policy_number: 'C45612389', agent_code: 39.948, agent_name: 'Ar',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 19, policy_number: 'C45612389', agent_code: 39.0983, agent_name: 'K',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
    {serial_no: 20, policy_number: 'C45612388', agent_code: 40.078, agent_name: 'Ca',agent_contact:'NA',propser_name:'DAN GRIP',propser_mobile:9632145789,video_psc_status:'YES',date:new Date(2023, 5, 23),source:'SellOnline',anp:24000},
  ];
  columnHeader:any;

  constructor(private router:Router) { }

  ngOnInit() {
   this.columnHeader=Object.keys(this.dataSMAR[0])
  }

  search(){
   

  }

  searchDate(){

  }

  l2Approval(){
    this.router.navigate(['/l2approvalDashboard'])
  }

  goToDashboard(){
    this.router.navigate(['/smardashboard'])
  }
}
