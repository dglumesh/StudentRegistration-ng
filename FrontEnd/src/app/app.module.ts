import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentService } from "./shared/student.service";
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { EnrollmentComponent } from './enrollments/enrollment/enrollment.component';
import { EnrollmentListComponent } from './enrollments/enrollment-list/enrollment-list.component';
import { CourseService } from "./shared/course.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    EnrollmentsComponent,
    EnrollmentComponent,
    EnrollmentListComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
progressBar:true
    }),
    AppRoutingModule
  ],
  providers: [StudentService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
