import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form! : FormGroup; 

  constructor(private fb : FormBuilder){}

  ngOnInit(){
    console.log('.....');
    this.myForm()
  }

  myForm(){
    this.form = this.fb.group({
      name:['',[]]
    })

  }


}
