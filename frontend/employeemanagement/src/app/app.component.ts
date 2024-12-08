import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { EmplyeeComponentComponent } from './emplyee-component/emplyee-component.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { EmployeeService } from './appServices/employee.service';
import { Employee } from './appModels/employee.model';
import { EmployeeResponse } from './appModels/employee-response.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {




  title = 'employeemanagement';
  empForm : FormGroup;

  constructor(
    private fb:FormBuilder,
    private empService:EmployeeService

  ){}

  isModelActive:boolean= false
  employees:Employee[]


  ngOnInit(): void {

    this.getEmployee();

    this.empForm = this.fb.group({
      _id:[''],
      name:['Ex. Pratham Hadap'],
      position:['Ex. Full Stack Developer'],
      dept:['IT']
    })
  }

  onSubmit(){
    // console.log('FormData',this.empForm)
    
    this.empService.addEmployee(this.empForm.value).subscribe(
      
      (res)=>{
        console.log(res)
        this.getEmployee();
      },
      (err)=>{
        console.log(err)
      }
    )
    
    this.isModelActive = false
  }

  getEmployee(){
    this.empService.getEmployeeList().subscribe((res:EmployeeResponse)=>{
      console.log(res);
      this.employees = res.data
      console.log("employee data",this.employees)
    })
  }

  onClick(){
    this.isModelActive = true
  }

  onClose(){
    this.isModelActive = false
  }

  // onCrossClick(){
  //   this.isModelActive = false
  // }

  onEditClick(){
    this.isModelActive = true
  }

}
