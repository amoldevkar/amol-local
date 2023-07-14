import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentactivityComponent } from './studentactivity/studentactivity.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';
import { ApicallComponent } from './apicall/apicall.component';

const routes: Routes = [
  {path: 'studentactivity',component : StudentactivityComponent},
  {path :'studentdemo',component : StudentdemoComponent},
  {path: 'apicall',component : ApicallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
