import { Injectable } from '@angular/core';
import { Course } from "./course.model";
import { HttpClient } from "@angular/common/http";
import { Student } from "./student.model";
import { Enrollment } from "./enrollment.model";
import { Elist } from "./elist.model";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  formData1: Enrollment;
  formData2: Student;
  formData3: Course;
  readonly rootURL = "https://localhost:5001/api";
  list1: Course[];
  list2: Student[];
  list3: Enrollment[];
  list4: Elist[];
  constructor(private http: HttpClient) { }

  PostEnrollment() {
    return this.http.post(this.rootURL + "/Enrollment", this.formData1);
  }

  PutEnrollment() {
    return this.http.put(
      this.rootURL + "/Enrollment/" + this.formData1.EnrollmentID,
      this.formData1
    );
  }
  DeleteEnrollment(id) {
    return this.http.delete(this.rootURL + "/Enrollment/" + id);
  }



  GetCourseList() {
    this.http
      .get(this.rootURL + "/Course")
      .toPromise()
      .then(res => (this.list1 = res as Course[]));
  }

  GetStudentList() {
    this.http
      .get(this.rootURL + "/Student")
      .toPromise()
      .then(res => (this.list2 = res as Student[]));
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Enrollment")
      .toPromise()
      .then(res => (this.list3 = res as Enrollment[]));
  }

  refreshList1() {
    this.http
      .get(this.rootURL + "/Enrollment/Enroll")
      .toPromise()
      .then(res => (this.list4 = res as Elist[]));
  }


  // GetStudent(id){
  //   this.http
  //   .get(this.rootURL + "/Student/"+id)
  //   .toPromise()
  //   .then(res => (this.list2 = res as Student[]));
  // }

  // GetCourse(id){
  //   this.http
  //   .get(this.rootURL + "/Course/"+id)
  //   .toPromise()
  //   .then(res => (this.list1 = res as Course[]));
  // }

}
