import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../appModels/employee.model';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../appModels/employee-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:9000/api/v1/create-employee'

  constructor(private http: HttpClient) { }

  // addEmployee(emp:Employee){
  //   return this.http.post(this.url, emp)
  // }

  getEmployeeList(): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>("http://localhost:9000/api/v1/get-employee");
  }

  // getEmployeeList(){
  //   // http://localhost:9000/api/v1/get-employee
  //   // http://localhost:9000/api/v1/delete-employee/67557a33f1b4b2fb0d461f66
  //   // http://localhost:9000/api/v1/update-employee/675580ddf243d655b4ff48f5
  //   return this.http.get("http://localhost:9000/api/v1/get-employee")
  // }

  addEmployee(emp: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.url, emp);
  }

}
