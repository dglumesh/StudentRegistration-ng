import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { EnrollmentComponent } from './enrollments/enrollment/enrollment.component';
import { EnrollmentListComponent } from './enrollments/enrollment-list/enrollment-list.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {
    path: 'students' , component: StudentsComponent,
    children: [
                {path: 'student' , component: StudentComponent},
                {path: 'student-list' , component: StudentListComponent}
              ]
  },

  {
    path: 'courses' , component: CoursesComponent,
    children: [
                {path: 'course' , component: CourseComponent},
                {path: 'course-list' , component: CourseListComponent}
              ]
  },

  {
    path: 'enrollments' , component: EnrollmentsComponent,
    children: [
                {path: 'enrollment' , component: EnrollmentComponent},
                {path: 'enrollment-list' , component: EnrollmentListComponent}
              ]
  },


  
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
