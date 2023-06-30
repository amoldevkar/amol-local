import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesinAngularComponent } from './directivesin-angular/directivesin-angular.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

console.log('app.module.ts file ')

@NgModule({
  declarations: [ //components,directives,pipes
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    DirectivesinAngularComponent,
    ParentComponent,
    ChildComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
