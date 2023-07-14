import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentactivityComponent } from './studentactivity/studentactivity.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule} from '@angular/common/http'

console.log('student module');




@NgModule({
  declarations: [
    StudentactivityComponent,
    StudentdemoComponent,
    ApicallComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
	  HttpClientModule
	
   
  ],
  exports:[
    StudentdemoComponent,

  ]
})
export class StudentModule { }
