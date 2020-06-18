import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee = new BehaviorSubject(new Employee('', '', ''));
  emp = this.employee.asObservable();

  constructor() {}

  updateEmployee(newEmp: Employee) {
    this.employee.next(newEmp);
  }
}
