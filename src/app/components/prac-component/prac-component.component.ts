import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac-component',
  templateUrl: './prac-component.component.html',
  styleUrls: ['./prac-component.component.css']
})
export class PracComponentComponent implements OnInit {
  firstName: string ="Diksha"
  lastName: string = "Agarwal"
  gender:string='Female'
  random:number=60078.334645645645657
  constructor() { }

  ngOnInit() {
  }

}
