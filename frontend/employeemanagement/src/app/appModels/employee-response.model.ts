import { Employee } from "./employee.model";

export interface EmployeeResponse {
    success: boolean;
    message: string;
    data: Employee[];  // यहां Employee[] टाइप का उपयोग करें
  }
  