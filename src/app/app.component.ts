import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  Users=[
    {Name:"Raslan",Job:"Java",color:"red"},
    {Name:"Samy",Job:"html",color:"blue"},
    {Name:"Ali",Job:"c++",color:"gray"},
    {Name:"Reda",Job:"asp",color:"yellow"},
    {Name:"Aya",Job:"andriod",color:"green"}

];
}
