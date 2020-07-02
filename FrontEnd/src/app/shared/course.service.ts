import { Injectable } from '@angular/core';
import { Course } from "./course.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  formData: Course;
  readonly rootURL = "https://localhost:5001/api";
  list: Course[];
  constructor(private http: HttpClient) { }

  PostCourse() {
    return this.http.post(this.rootURL + "/Course", this.formData);
  }

  PutCourse() {
    return this.http.put(
      this.rootURL + "/Course/" + this.formData.CourseID,
      this.formData
    );
  }
  DeleteCourse(id) {
    return this.http.delete(this.rootURL + "/Course/" + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Course")
      .toPromise()
      .then(res => (this.list = res as Course[]));
  }

}
