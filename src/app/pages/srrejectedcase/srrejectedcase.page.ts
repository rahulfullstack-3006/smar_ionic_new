import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srrejectedcase',
  templateUrl: './srrejectedcase.page.html',
  styleUrls: ['./srrejectedcase.page.scss'],
})
export class SrrejectedcasePage implements OnInit {

  customerDetails=[
    {customer_heading:'Policy No.',customer_data:'C458163874'},
    {customer_heading:'Customer Name',customer_data:'C458163874'},
    {customer_heading:'Policy Term',customer_data:'C458163874'},
    {customer_heading:'Premium Pay Mode',customer_data:'C458163874'},
    {customer_heading:'Premium Pay Term',customer_data:'C458163874'},
    {customer_heading:'Annual Premium',customer_data:'C458163874'},
    {customer_heading:'Sum Assured',customer_data:'C458163874'},
    {customer_heading:'Deviation Reason',customer_data:'C458163874'},
    {customer_heading:'Deviation Approver Name',customer_data:'C458163874'},
    {customer_heading:'Proposer Name',customer_data:'C458163874'},
    {customer_heading:'Proposer Mobile Number',customer_data:'C458163874'},
    {customer_heading:'Proposer Email ID',customer_data:'C458163874'},
    {customer_heading:'Agent Code',customer_data:'C458163874'},
    {customer_heading:'Agent Name',customer_data:'C458163874'},
    {customer_heading:'Agent Mobile Number',customer_data:'C458163874'},
    {customer_heading:'Agent Email ID',customer_data:'C458163874'},
    {customer_heading:'Agent Designation',customer_data:'C458163874'},
    {customer_heading:'Leader Code',customer_data:'C458163874'},
    {customer_heading:'Leader Name',customer_data:'C458163874'},
  
   ]
  
   customer_yesorno_details=[
    {label:'Income Proof Document Verified',yes_content:'YES',no_content:'NO'},
    {label:'CDF Verified',yes_content:'YES',no_content:'NO'},
    {label:'Renewal Payment Option Mandate Form Verified',yes_content:'YES',no_content:'NO'},
    {label:'CCR Verified',yes_content:'YES',no_content:'NO'},
    {label:'Address Proof Details and Documents verified',yes_content:'YES',no_content:'NO'},
    {label:'Questionnaires Verified',yes_content:'YES',no_content:'NO'},
    {label:'SIS Verified',yes_content:'YES',no_content:'NO'},
    {label:'Is valid NEFT details provided & matching with Application Format',yes_content:'YES',no_content:'NO'},
    {label:'Payment Verified',yes_content:'YES',no_content:'NO'}
  
   ]

   public segment: string = "list";
   public arr = new Array(25);

  constructor() { }

  ngOnInit() {
  }

  goToL1L2Dashboard(){

  }

  goToDashboard(){

  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
