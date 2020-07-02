import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Student } from "src/app/shared/student.model";
import { StudentService } from "src/app/shared/student.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styles: []
})
export class StudentListComponent implements OnInit {
  constructor(private service: StudentService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Student) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(StudentID) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.DeleteStudent(StudentID).subscribe(
        res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning(
            "Deleted successfully",
            "Student Detail Register"
          );
        },
        err => {
          debugger;
          console.log(err);
        }
      );
    }
  }
}
