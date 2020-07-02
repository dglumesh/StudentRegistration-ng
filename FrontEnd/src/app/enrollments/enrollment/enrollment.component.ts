import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";
import { EnrollmentService } from "src/app/shared/enrollment.service";
import { Student } from "src/app/shared/student.model";
import { Course } from "src/app/shared/course.model";

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  constructor(private service: EnrollmentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.service.GetStudentList();
    this.service.GetCourseList();
   
    
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData1 = {
      EnrollmentID: 0,
      StudentID: 0,
      CourseID: 0
    };
  }

/* for student list */
// populateStudentList(sd: Student) {
//   this.service.formData2 = Object.assign({}, sd);
// }

/* for course list */
// populateCourseList(cd: Course) {
//   this.service.formData3 = Object.assign({}, cd);
// }




  onSubmit(form: NgForm) {
    if (this.service.formData1.EnrollmentID == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.PostEnrollment().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success(
          "Submitted successfully",
          "Enrollment Register"
        );
        this.service.refreshList1();
      },
      err => {
        debugger;
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.PutEnrollment().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Submitted successfully", "Enrollment Register");
        this.service.refreshList1();
      },
      err => {
        console.log(err);
      }
    );
  }

}
