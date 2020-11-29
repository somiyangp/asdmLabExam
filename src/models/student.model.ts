export class Student{
    id:number=0;
    name:string="";
    allMarks:number=0;
    average:number=0;

    constructor(id:number=0,name:string="",allMarks:number,average:number){
        this.id=id;
        this.name=name;
        this.allMarks=allMarks;
        this.average=average;
    }
}