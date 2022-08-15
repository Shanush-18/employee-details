import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup!:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
   this.employeeFormGroup= this.fb.group({
      name:new FormControl('',Validators.required),
      phone:new FormControl(''),
      jobType:[],
      gender:[]
    })
    
  }

  onSubmit():void{
   if(this.employeeFormGroup.valid){
    console.log(this.employeeFormGroup.value)
   }else{
    this.employeeFormGroup.markAllAsTouched()
   }   
  }
reset(){
  this.employeeFormGroup.reset()
}
}
