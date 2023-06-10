import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentactivityComponent } from './studentactivity/studentactivity.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';

console.log('student module')


@NgModule({
  declarations: [
    StudentactivityComponent,
    StudentdemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
