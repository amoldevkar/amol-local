import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesin-angular',
  templateUrl: './directivesin-angular.component.html',
  styleUrls: ['./directivesin-angular.component.css']
})
export class DirectivesinAngularComponent {
  show = false;
  show1 = true;
  toshowpara1!: string;
  toshowpara: string = 'amol';
  undefinedproperty!: any;
  nullproperty = null;
  toggel: boolean = false;
  cars: string[] = ['mini cup', 'jaguar', 'swift', 'marcedeez']
  carDetails = [
    { carName: 'swift', carprice: 800000, color: 'white' },
    { carName: 'mini cup', carprice: 2500000, color: 'white' },
    { carName: 'marcedeez', carprice: 800000, color: 'white' },
    { carName: 'i10', carprice: 500000, color: 'blue' },
    { carName: 'i20', carprice: 1000000, color: 'black' },

  ];
  tablehading: string[] = ['carName', 'carprice', 'color']
  data = [20, 60, 50, 30, [60, 30, 89]]
  data2: any[] = [];
  data3: any[] = [];
  //let xyz =[]; //js/within function only
  //xyz = []; proparty with empty array
  color = 'pink';
  styleCss = 'yellow2';
  test = 300;
  switchValue = 1003;


  constructor() {

  }
  ngOnInit() {
    this.data.forEach((item, i) => {
      if (i != 4) {
        this.data2.push(item)
      }
    })

    this.data.forEach((item: any, i) => {
      if (i == 4) {
        this.data3 = [...item];
      }
    })
  }
  //let xyz =[]; //js/within function only
  //xyz = []; proparty with empty array




  toggelEffect() {
    let abc;
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
