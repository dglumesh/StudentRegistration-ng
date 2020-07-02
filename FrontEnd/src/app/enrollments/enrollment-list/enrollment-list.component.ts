import { Component, OnInit } from '@angular/core';
import { Enrollment } from "src/app/shared/enrollment.model";
import { EnrollmentService } from "src/app/shared/enrollment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  constructor(private service: EnrollmentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList1();
   
  }
  populateForm(pd: Enrollment) {
    this.service.formData1 = Object.assign({}, pd);
  }

  onDelete(EnrollmentID) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.DeleteEnrollment(EnrollmentID).subscribe(
        res => {
          debugger;
          this.service.refreshList1();
          this.toastr.warning(
            "Deleted successfully",
            "Enrollment Detail Register"
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
