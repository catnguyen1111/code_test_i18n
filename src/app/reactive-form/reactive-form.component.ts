import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public name = new FormControl('');
  // public age = new FormControl('');
  public checks:boolean = false;
  public profileForm = this.fb.group({
    name: ['',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]],
    age: ['',Validators.required],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    alias: this.fb.array([
      this.fb.control('')
    ])
  });
  get alias() {
    return this.profileForm.get('alias') as FormArray;
  }
  addAlias() {
    this.alias.push(this.fb.control(''));
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  check(): void {
    if(this.profileForm.controls.name.dirty === true){
      alert("Please select")
    }
  }
  public updateName(){
    // this.name.setValue('Cat Nguyen');
    // this.age.setValue(12);
  }

  public onSubmit(){
    this.checks = true; 
    console.log(this.profileForm.controls);
    console.log("name",this.profileForm.controls.name.value);

  }
  // public onSubmit(){
  //  console.log(this.name.value);
  //  console.log(this.age.value);
  // }
}
