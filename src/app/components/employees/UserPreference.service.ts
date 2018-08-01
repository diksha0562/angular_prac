import {Injectable} from '@angular/core';
@Injectable()
export class UserPreferenceService{
    colorPreference:string = 'orange';
    constructor(){
        console.log('new instance created')
    }
}