import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import {course} from '../../../course'
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courses:course[];
  pricetype:string="All Courses";
  constructor(private cs:CourseService) { 
    this.courses=this.cs.getCourses();
  }

  ngOnInit() {
  }

}
