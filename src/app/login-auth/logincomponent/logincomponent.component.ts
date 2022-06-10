import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor() { }
  userData=[{
    name:"afaal",
    fname:"javaid"
  },{
    name:"afaal",
    fname:"javaid"
  }];
  inputData:string="";
  getData(name:string){
    alert(name);
  }
  getInputData(data:string){
    this.inputData=data;
  }
  counterData=0;

  Increment(){
    this.counterData++;
  }

  Decrement(){
    if(this.counterData<0){
      this.counterData=0;  
    }
    this.counterData--;
  }

  ngOnInit(): void {
    
  }
  onFormSubmit(result:any) {
    console.log("You have entered : " + result.username); 
 }
}