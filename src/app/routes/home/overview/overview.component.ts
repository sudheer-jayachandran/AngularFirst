import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
courseCode:string;
  constructor(private route:ActivatedRoute) { 
    route.params.subscribe(params=> 
      this.courseCode=params['ccode']);
  }

  ngOnInit() {
  }

}
