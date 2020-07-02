import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/shared/student.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styles: []
})
export class StudentComponent implements OnInit {
  constructor(private service: StudentService, private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      StudentID: 0,
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Mobile: "",
      Telephone: "",
      Email: "",
      Address: "",
      DOB: "",                                            
      NIC: ""
    };
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.StudentID == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.PostStudent().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success(
          "Submitted successfully", "Student Detail Register"
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
    this.service.PutStudent().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Submitted successfully", "Payment Detail Register");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
