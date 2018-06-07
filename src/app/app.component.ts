import { Component } from '@angular/core';
import { OfferDirective } from './directives/offer.directive';
import { OfferService } from './services/offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message:string;
  constructor(private offer:OfferService){
    this.message=offer.message;
  }
}
