import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  //template: `<h1>Hello {{title}}</h1>`,
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 23;
  colSpan: number = 2;

  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
