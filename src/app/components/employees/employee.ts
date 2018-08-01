export interface IEmployee {
    code:string;
    gender:string;
    name:string;
    // optionalProp?:string
    // monthlySalary(annualSalary:number) : number
}

// export class Employee implements IEmployee{
// //    public code:string;
// //    public gender:string;
// //    public name:string;

// //     constructor(code:string, gender:string, name:string){
// //         this.code=code;
// //         this.gender=gender;
// //         this.name=name;
// //     }
// constructor(public code:string,public gender:string,public name:string){
// }
// monthlySalary(annualSalary:number) : number{
// return annualSalary/12
// }
// }
// export class Test{
// constructor(private firstName:string, private lastName:string){}

// }