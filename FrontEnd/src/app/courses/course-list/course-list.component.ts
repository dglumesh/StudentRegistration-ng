import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { Course } from "src/app/shared/course.model";
import { CourseService } from "src/app/shared/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: []
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd: Course) {
    this.service.formData = Object.assign({}, pd);
  }
  onDelete(CourseID) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.DeleteCourse(CourseID).subscribe(
        res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning(
            "Deleted successfully",
            "Course Detail Register"
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
