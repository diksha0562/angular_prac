import { Component, OnInit } from '@angular/core';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';
import {UserPreferenceService} from './UserPreference.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[];
  selectedEmployeeCountRadioButton : string='All';
  statusMessage: string='Loading data please wait';
  // private _employeeService : EmployeeService
  // constructor(_employeeService: EmployeeService) { 
  //  this._employeeService = _employeeService
  // }
  // private _userPreferenceService: UserPreferenceService
  
  constructor(private _employeeService: EmployeeService,
    private _userPreferenceService: UserPreferenceService
  ) { 
    // this.employees = this._employeeService.getEmployees() 
    // this._userPreferenceService = new UserPreferenceService();
  }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((empData) => {this.employees = empData},
    (error) => {this.statusMessage = 'Problem with service. Please try after sometime'}
  ) 
  }
  // ngOnInit() {
  //   this._employeeService.getEmployees().then((empData) => {this.employees = empData},
  //   (error) => {this.statusMessage = 'Problem with service. Please try after sometime'}
  // ) 
  // }

  get color() :string {
    return this._userPreferenceService.colorPreference;
  }

  set color(value: string) {
    this._userPreferenceService.colorPreference = value;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string) : void{
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue
  }

  getTotalEmployeesCount() :number{
    return this.employees.length
  }

  getTotalMaleEmployeesCount() :number{
    return this.employees.filter(emp => emp.gender == 'Male').length
  }
  
  getTotalFemaleEmployeesCount() :number{
    return this.employees.filter(emp => emp.gender == 'Female').length
  }
}
