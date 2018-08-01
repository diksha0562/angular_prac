import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  
  selectedRadioButtonValue:string= 'All';

  @Output()
  //create custom event whose event data is of type string
  countRadioButoonSelectionChanged = new EventEmitter()
  
  @Input()
  all:number

  @Input()
  male:number

  @Input()
  female:number
  constructor() { }

  ngOnInit() {
  }
  onRadioButtonSelection(){
    this.countRadioButoonSelectionChanged.emit(this.selectedRadioButtonValue); 
    console.log(this.selectedRadioButtonValue);  
  }

}
