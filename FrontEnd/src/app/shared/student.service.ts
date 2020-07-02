import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class StudentService {
  formData: Student;
  readonly rootURL = "https://localhost:5001/api";
  list: Student[];
  constructor(private http: HttpClient) {}

  PostStudent() {
    return this.http.post(this.rootURL + "/Student", this.formData);
  }

  PutStudent() {
    return this.http.put(
      this.rootURL + "/Student/" + this.formData.StudentID,
      this.formData
    );
  }
  DeleteStudent(id) {
    return this.http.delete(this.rootURL + "/Student/" + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Student")
      .toPromise()
      .then(res => (this.list = res as Student[]));
  }



}
