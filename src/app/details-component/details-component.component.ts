import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css'],
})
export class DetailsComponentComponent implements OnInit {
  employeeDetails: FormGroup;
  newEmployee: Employee;
  constructor(public empService: EmployeeService, public router: Router) {}

  ngOnInit(): void {
    this.employeeDetails = new FormGroup({
      name: new FormControl(''),
      salary: new FormControl(''),
      age: new FormControl(''),
    });
  }

  // onSubmit() {
  //   console.log('data |', this.employeeDetails.value.name);
  //   this.newEmployee = new Employee(
  //     this.employeeDetails.value.name,
  //     this.employeeDetails.value.salary.toString(),
  //     this.employeeDetails.value.age.toString()
  //   );
  //   console.log(this.newEmployee);
  // this.restApi.createEmployee(this.newEmployee).subscribe((data: {}) => {
  //   window.alert(
  //     'employee created successfully with status : ' + data.status
  //   );
  //   console.log(data);
  // });
  //   this.employeeDetails.reset();
  // }
  onSubmit() {
    console.log('data |', this.employeeDetails.value.name);
    this.newEmployee = new Employee(
      this.employeeDetails.value.name,
      this.employeeDetails.value.salary.toString(),
      this.employeeDetails.value.age.toString()
    );
    console.log(this.newEmployee);
    this.empService.updateEmployee(this.newEmployee);
    this.router.navigate(['/submit']);
  }
}
