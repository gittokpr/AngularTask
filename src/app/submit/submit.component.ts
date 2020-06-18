import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  empDetail: Employee;
  status: string;

  constructor(public empService: EmployeeService, public restApi: ApiService) {}

  onSubmit() {
    this.empService.emp.subscribe((empData) => {
      console.log(empData);
      this.restApi.createEmployee(empData).subscribe((data: any) => {
        this.empDetail = new Employee(
          data.data.name,
          data.data.salary,
          data.data.age
        );
        this.status = data.status;
        console.log(data);
      });
    });
  }

  ngOnInit(): void {
    this.onSubmit();
  }
}
