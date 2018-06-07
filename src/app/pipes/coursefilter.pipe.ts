import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../course';
import { templateJitUrl } from '@angular/compiler';
@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(courses: course[], pricetype: any): any {
    let temp= [];
      if(pricetype=="Heavily priced"){
          for (let x in courses){
            if(courses[x].price<12000)
            temp.push(courses[x])
          }
  return temp;
  }
  else if (pricetype=="Moderately priced")
  {
        for(let x in courses){
    if(courses[x].price<12000)
    temp.push(courses[x])
        }
        return temp;
  }
  else{
    return courses;
  }

}
}
