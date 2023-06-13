import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router : Router){
    
  }
  login(){
   this.router.navigateByUrl('/login')
   
  }
  studentactivity(){
    this.router.navigateByUrl('student/studentactivity')
  }
  directives(){
    this.router.navigateByUrl('directives')
  }
}
