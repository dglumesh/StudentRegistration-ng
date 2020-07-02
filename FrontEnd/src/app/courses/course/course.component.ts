import { Component, OnInit } from '@angular/core';
import { CourseService } from "src/app/shared/course.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {

  constructor(private service: CourseService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      CourseID: 0,
      CourseName: "",
      StartDate: null,
      EndDate: null
    };
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.CourseID == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.PostCourse().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success(
          "Submitted successfully",
          "Course Register"
        );
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.PutCourse().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Submitted successfully", "Course Register");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
