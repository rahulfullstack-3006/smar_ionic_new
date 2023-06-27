import { Component, OnInit } from '@angular/core';
import { CommonTablePage } from '../common-table/common-table.page';

export interface SMARDetails {
  policy_number: string;
  plan_name: string;
  channel: string;
  customer_name: string;
  customer_mobile: number;
  reason_category: string;
  agent_name: string;
  agent_code: string;
  agent_mobile: number;
  office_name:string;
  submission_date:Date;
}

@Component({
  selector: 'app-deviationdashboard',
  templateUrl: './deviationdashboard.page.html',
  styleUrls: ['./deviationdashboard.page.scss'],
})
export class DeviationdashboardPage implements OnInit {

  dataSMAR:SMARDetails[]= [
    {policy_number: 'C45612389', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'HDFCSolution',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9634555789,reason_category:'Same Mobile NUMBER',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C45615658', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'DBSSolution',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 2)},
    {policy_number: 'C45612389', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'IndusSolution',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C45646666', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'Bancassurance',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C45612389', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'Bancassurance',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C45612389', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'Bancassurance',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C45612389', plan_name: 'Tata AIA Life Insurance Saral Jeevan Bima',channel:'Bancassurance',customer_name:'VIPUL GANPAT SALUNKE	',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C45612389', plan_name: 'Tata AIA Life Insurance Insta Protect',channel:'Bancassurance',customer_name:'VIPUL GANPAT SALUNKE	',    customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 1)},
    {policy_number: 'C88888888', plan_name: 'Tata AIA Life Insurance Sampoorna Raksha',channel:'Bancassurance',customer_name:'VIJAY SALUNKE KEEEEEE',customer_mobile:9632145789,reason_category:'Same Mobile No',agent_name:'Vipul S	',agent_code:'OOABYU7',agent_mobile:9845612369,office_name:'TATA AIA Rewari',submission_date:new Date(2023, 5, 6)},

  ];
  dataSMARHeader:any;
  constructor() { }

  ngOnInit() {  
    this.dataSMARHeader=Object.keys(this.dataSMAR[0])  
    console.log("dataSmar",Object.keys(this.dataSMAR[0]));
    
  }

}
