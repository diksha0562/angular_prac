import {Injectable} from '@angular/core';
import {IEmployee} from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'
//Http service provides get
@Injectable()
export class EmployeeService{

    constructor(private _http: HttpClient){

    }

    getEmployees() : Observable<IEmployee[]>{
        return this._http.get<IEmployee[]>("https://raw.githubusercontent.com/diksha0562/angular_prac/master/employeeData")
        .pipe(
            retry(3),
            catchError(this.handleError)
          );
    }


    // getEmployees() : Promise<IEmployee[]>{
    //         return this._http.get<IEmployee[]>("https://raw.githubusercontent.com/diksha0562/angular_prac/master/employeeData")
    //         .toPromise()
    //         //.catch(this.handlePromiseError  )
    //             // .catchError(this.handleError)
    //         //   );
    //     }
    
    // getEmployeeByCode(empCode:string) : Observable<IEmployee>{
    //     return this._http.get<IEmployee[]>("https://raw.githubusercontent.com/diksha0562/angular_prac/master/employeeData/"+empCode)
    //     .pipe(
    //         catchError(this.handleError)
    //       );
    // }

    handleError(error : HttpErrorResponse){
        console.log(error)
        return throwError(
            'Something bad happened; please try again later.');
    }

    handlePromiseError(error : HttpErrorResponse){
        console.log(error)
        throw(error)
    }
    // getEmployees(){
    //     return [
    //         {code:'01', gender:'Female', name:'Diksha'},
    //         {code:'02', gender:'Male', name:'Abhay'},
    //         {code:'03', gender:'Female', name:'Heena'},
    //         {code:'04', gender:'Female', name:'Heena'}
    //     ]
    // }

    // getEmployees() {
    //     return this._http.get("https://raw.githubusercontent.com/diksha0562/angular_prac/master/employeeData")
    //     // .map((response : Response)=> <IEmployee[]> response.json())
    // }
}

