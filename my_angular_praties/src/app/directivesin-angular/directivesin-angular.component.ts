import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesin-angular',
  templateUrl: './directivesin-angular.component.html',
  styleUrls: ['./directivesin-angular.component.css']
})
export class DirectivesinAngularComponent {
     show = false;
     show1 = true;
     toshowpara1!:string;
     toshowpara :string ='amol';
     undefinedproperty!:any;
     nullproperty =null;
     toggel:boolean = false;


     toggelEffect(){
       //this.toggel = false;
      // this.toggel =!true >>false and  !false >>true
       this.toggel = !this.toggel

     }
     

}


  





// = >> assigment operator 
//let x = 50;
//test = 60;
//== >> equality operater
//to compare only value , it will not compare data type 
//let a = 20;//numbar
//let b ='20'//string
//if(a ==b )>> true
//=== >> equlity operater(strictly checking data type as well as value)
//if(a ===b )>> false -->
