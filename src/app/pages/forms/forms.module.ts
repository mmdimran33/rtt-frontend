import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormsComponent, ContactUSComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NzGridModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],

})
export class FormsModule { 
  constructor(){
    console.log('FormsModule constructer called!!!!!!!!');
  }
}
