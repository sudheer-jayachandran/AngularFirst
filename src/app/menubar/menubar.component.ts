import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  lang:string="english";
  constructor(private ts:TranslateService) { 
    this.ts.use(this.lang);
  }
  changeLang(){
    this.ts.use(this.lang);
  }

  ngOnInit(

  ) {
  }

}
