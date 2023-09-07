import { Component } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[];

  constructor(private studentService:StudentService,private router:Router){}

  ngOnInit():void{
    this.getStudents();
    //this.students = [{"id":1,"firstName":"thsru","lastName":"jagoda","emailId":"xxx@gmail.com"}];
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data =>{
      console.log(data);
      this.students = data;
    });
  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(data =>{
      console.log(data);
      this.getStudents();
    });
  }

  studentDetails(id:number){
    this.router.navigate(['student-details',id]);
  }


}
