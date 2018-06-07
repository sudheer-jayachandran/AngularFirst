import { Injectable } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Injectable()
export class OfferService {
message:string;
offerday:boolean;
  constructor() {
    this.offerday=true;
    this.message= "falt 8%-25%off on all courses";
   }

}
