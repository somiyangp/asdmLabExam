import { Component } from '@angular/core';
import { Student } from 'src/models/student.model';

@Component({
    selector:"student",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.css"]
})
export class StudentComponent{
    id:number=0;
    name:string="";
    javaMarks:number=0;
    mathMarks:number=0;
    scienceMarks:number=0;
    flag=false;

    students:Student[]=[new Student(101,"Somiya",50+40+70,((50+40+70)/3))];

    add(){
        this.flag=true;
    }
    addStudMarks()
    {

       let allMarks=this.javaMarks+this.mathMarks+this.scienceMarks;
       let stud=new Student(this.id,this.name,allMarks,((allMarks)/3))
        this.students.push(stud);
        this.flag=false;

    }
    // displayMarks(s:Student)
    // {
    //     for(let i=0;i<this.students.length;i++)
    //     {
    //         if(s.name==this.students[i].name)
    //         {
    //              this.students[i];
    //         }
    //     }
    // }
}