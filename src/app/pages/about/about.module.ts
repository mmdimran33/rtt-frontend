import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { CoEComponent } from './co-e/co-e.component';
import { CSRComponent } from './csr/csr.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CustomersComponent } from './customers/customers.component';
import { BussinessAlliancesComponent } from './bussiness-alliances/bussiness-alliances.component';
import { RootTronicsTechnologyComponent } from './root-tronics-technology/root-tronics-technology.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [AboutComponent, AboutUSComponent, ManagementTeamComponent, CoEComponent, CSRComponent, NewsletterComponent, CustomersComponent, BussinessAlliancesComponent, RootTronicsTechnologyComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgbModule,
    NzCarouselModule,
    NzGridModule,
    NzButtonModule  
  ]
})
export class AboutModule { 
  constructor() {
    console.log('lazy Loading');
    
  }
}
