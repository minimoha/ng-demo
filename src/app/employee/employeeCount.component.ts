import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'employee-count',
  templateUrl: './employeeCount.component.html',
  styleUrls: ['./employeeCount.component.css']
})


export class EmployeeCountComponent {
  // all: number = 10;
  // male: number = 5;
  // female: number = 5;

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: number = 0;
  @Input()
  male: number = 0;
  @Input()
  female: number = 0;


  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
    //console.log(this.selectedRadioButtonValue)
  }
}
