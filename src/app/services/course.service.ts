import { Injectable } from '@angular/core';
import {course} from '../course';
@Injectable()
export class CourseService {
private cources:course[];
  constructor() { 
    this.cources=[
      {
        name:"asp.net",
        image:"asp.jpg",
        description:"TEST TEST TEST TEST TEST TEST",
        price:22000
      },
      {
        name:"AWS",
        image:"aws.png",
        description:"Amazon web services TEST TEST TEST TEST TEST TEST",
        price:12000
      }, 
      {
        name:"azure",
        image:"azure.png",
        description:"TEST TEST TEST TEST TEST TEST",
        price:25000
      },
      {
        name:"CSS",
        image:"css.jpg",
        description:"TEST TEST TEST TEST TEST TEST",
        price:2000
      },
      {
        name:"HTML 5",
        image:"html.png",
        description:"html 5 TEST TEST TEST TEST TEST TEST",
        price:10000
      },
      {
        name:"Hadoop",
        image:"hadoop.png",
        description:"hadoop TEST TEST TEST TEST TEST TEST",
        price:45000
      },
      {
        name:"Java",
        image:"java.png",
        description:"Java TEST TEST TEST TEST TEST TEST",
        price:38000
      },
      {
        name:"JavaScript",
        image:"js.jpg",
        description:"JavaScript TEST TEST TEST TEST TEST TEST",
        price:16500
      },
      {
        name:"SQL",
        image:"sql.png",
        description:"SQL TEST TEST TEST TEST TEST TEST",
        price:9000
      }
    ]
  }
  getCourses():course[]{
    return this.cources;
  }

}
