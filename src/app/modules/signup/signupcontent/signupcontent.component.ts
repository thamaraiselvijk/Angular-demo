import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupcontent',
  templateUrl: './signupcontent.component.html',
  styleUrls: ['./signupcontent.component.css']
})
export class SignupcontentComponent implements OnInit {

  name2="";
  email2=""; 
  department="";
  number2="";

  submit(name:any,email:any,dept:any,number:any){
    this.name2=name;
    this.email2=email;
    this.department=dept;
    this.number2=number;    
  }



  constructor() { }

  ngOnInit(): void {
  }

}
