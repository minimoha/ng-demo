import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import 'rxjs/ajax'
//import 'rxjs/operators/map'
import  {map, catchError, switchMap } from 'rxjs/operators'
//import 'rxjs/operators/catchError'

@Injectable()
export class EmployeeService{

constructor(private _http: HttpClient){

}

  // getEmployees(): IEmployee[] {
  //   return [
  //     {code:'emp101', name:'Tom', gender:'Male', annualSalary:5500,dateOfBirth:'6/25/1998'},
  //     {code:'emp101', name:'Alex', gender:'Male', annualSalary:6700,dateOfBirth:'10/25/1962'},
  //     {code:'emp101', name:'John', gender:'Male', annualSalary:700,dateOfBirth:'07/25/1990'},
  //     {code:'emp101', name:'Jane', gender:'Female', annualSalary:5000,dateOfBirth:'12/25/1980'},
  //     {code:'emp105', name:'Nancy', gender:'Female', annualSalary:8000,dateOfBirth:'7/25/1989'}
  //   ]
  // }


  // getEmployees(): Observable<IEmployee[]> {

  //   let ss = this._http.get<IEmployee[]>('https://localhost:7164/employee')
  //   ss.subscribe((data) => console.log(data))


  //   // return  this._http.get<IEmployee[]>('https://localhost:7164/employee')
  //   // .map((response: Response) => <IEmployee[]>response.json())
  //   // .catch(this.handleError)

  //   return this._http.get<IEmployee[]>('https://localhost:7164/employee')
  //   .pipe(catchError(this.handleError))

  //   //.pipe(map((response: IEmployee[]) => <IEmployee[]>response))
  //   //.subscribe()
  //   // .subscribe(resp => {
  //   //   resp = resp.json();
  //   //   console.log(resp);
  //   // });

  //   //.subscribe(data:HttpResponse => <IEmployee[]>data.json()
  //   //)
  // }


  getEmployees(): Observable<any> {

    let ss = this._http.get<any>('https://localhost:7164/employee')
    ss.subscribe((data) => console.log(data))

    return this._http.get<any>('https://localhost:7164/employeee')
    .pipe(catchError(this.handleErrorr))

  }

  handleError(error: Response) {
    console.error(error)

    return throwError(error);
    //var ss = (error: Response) => error.json()
    return new Error(JSON.parse(error.toString()));
    //return throwError(error)
    //return Observable.throw(error);

  }

  handleErrorr(error: any) {
    console.error(error)
    return throwError(error.message);

  }
}
