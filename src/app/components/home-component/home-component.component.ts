import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserPreferenceService} from '../employees/UserPreference.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
//  private _userPreferenceService: UserPreferenceService
  constructor( private _userPreferenceService: UserPreferenceService,
    private _router: Router
  ) {
    //this._userPreferenceService = new UserPreferenceService();
   }

  ngOnInit() {
  }

  get color() :string {
    return this._userPreferenceService.colorPreference;
  }

  set color(value: string) {
    this._userPreferenceService.colorPreference = value;
  }

  onButtonClick(): void{
    this._router.navigate(['/employees'])
  }
}
