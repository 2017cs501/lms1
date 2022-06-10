import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data=0;
  changeData(){
    this.data=10;
  }
  toDoListData:any[]=[];
  addData(data:any){
    this.toDoListData.push({id:this.toDoListData.length,name:data});
  }
  removeItem(id:Int16Array){
    this.toDoListData.pop();
  }
}
