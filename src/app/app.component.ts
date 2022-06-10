import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS';
  name="Afzaal";
  count=0;
  getData(){
    return "Get Data Function";
  }
  obj=[{
    name:"afzaal",
    age:20,
    class:"10th"
  }]
  data=20;
  userDetails=[
    {
      name:"afzaal",
      email:"afzaaljavaid47#gmail.com"
    },
    {
      name:"ali",
      email:"aliraza#gmail.com"
    },
    {
      name:"Bilal",
      email:"bilalwaris47#gmail.com"
    }
  ]
}
