import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {TestModule} from './test.module';

import { AppComponent } from './app.component';
import { PracComponentComponent } from './components/prac-component/prac-component.component';
import {PracComponentComponentEmployee} from './components/prac-component/prac-component.pipe';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeCountComponent } from './components/employee-count/employee-count.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {UserPreferenceService} from './components/employees/UserPreference.service';

const appRoutes: Routes =[
  {path:'home', component: HomeComponentComponent},
  {path:'employees', component:EmployeesComponent },
  {path:'employees/:code', component:EmployeeCountComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PracComponentComponent,
    PracComponentComponentEmployee,
    EmployeesComponent,
    EmployeeCountComponent,
    HomeComponentComponent,
    PageNotFoundComponent
  ],
  imports: [TestModule,
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
