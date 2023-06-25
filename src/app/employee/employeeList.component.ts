import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";


@Component({
  selector: 'employee-list',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
  // employees: any[] = [
  //   {code:'emp101', name:'Tom', gender:'Male', annualSalary:5500,dateOfBirth:'25/6/1998'},
  //   {code:'emp101', name:'Alex', gender:'Male', annualSalary:6700,dateOfBirth:'25/6/1962'},
  //   {code:'emp101', name:'John', gender:'Male', annualSalary:700,dateOfBirth:'25/6/1990'},
  //   {code:'emp101', name:'Jane', gender:'Female', annualSalary:5000,dateOfBirth:'25/6/1980'}
  // ]

  //employees: any[];
  employees: IEmployee[];
  selectedEmployeeCountRadioButton: string = 'All';

  //private _employeeService: EmployeeService

  // constructor(_employeeService: EmployeeService){
  //   this._employeeService = _employeeService;
  //   this.employees = [
  //     // {code:'emp101', name:'Tom', gender:'Male', annualSalary:5500,dateOfBirth:'6/25/1998'},
  //     // {code:'emp101', name:'Alex', gender:'Male', annualSalary:6700,dateOfBirth:'10/25/1962'},
  //     // {code:'emp101', name:'John', gender:'Male', annualSalary:700,dateOfBirth:'07/25/1990'},
  //     // {code:'emp101', name:'Jane', gender:'Female', annualSalary:5000,dateOfBirth:'12/25/1980'},
  //     // {code:'emp105', name:'Nancy', gender:'Female', annualSalary:8000,dateOfBirth:'7/25/1989'}
  //   ]
  // }
statusMessage: string = 'Loading data. Please wait...';
  constructor(private _employeeService: EmployeeService){
    // this.employees = this._employeeService.getEmployees();
  }

  ngOnInit(){
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
                    .subscribe((employeeData) => this.employees = employeeData,
                    (error) => {
                      this.statusMessage = 'Oops, an error occurred.'
                    });
  }

  getEmployees():void {
    this.employees = [
      {code:'emp101', name:'Tom', gender:'Male', annualSalary:5500,dateOfBirth:'09/25/1998'},
      {code:'emp102', name:'Alex', gender:'Male', annualSalary:6700,dateOfBirth:'12/25/1962'},
      {code:'emp103', name:'John', gender:'Male', annualSalary:700,dateOfBirth:'8/25/1990'},
      {code:'emp104', name:'Jane', gender:'Female', annualSalary:5000,dateOfBirth:'6/25/1980'},
      {code:'emp105', name:'Nancy', gender:'Female', annualSalary:8000,dateOfBirth:'7/25/1989'}
    ]
  }

  trackByEmpCode(index:number, employee:any):string{
    return employee.code
  }

  getTotalEmployeesCount(): number {
    return this.employees.length
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
