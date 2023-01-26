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
import { ApplicationServicesComponent } from './application-services/application-services.component';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';
import { AutomationComponent } from './automation/automation.component';
import { CloudComponent } from './cloud/cloud.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { DigitalCommerceComponent } from './digital-commerce/digital-commerce.component';
import { FinanceConsultingComponent } from './finance-consulting/finance-consulting.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { SecurityComponent } from './security/security.component';
import { SupplyChainFinanceComponent } from './supply-chain-finance/supply-chain-finance.component';
import { TechnologyConsultingComponent } from './technology-consulting/technology-consulting.component';
import { TechnologyInnovationComponent } from './technology-innovation/technology-innovation.component';


@NgModule({
  declarations: [AboutComponent, AboutUSComponent, ManagementTeamComponent, CoEComponent, CSRComponent, NewsletterComponent, CustomersComponent, BussinessAlliancesComponent, RootTronicsTechnologyComponent, ApplicationServicesComponent, ArtificialIntelligenceComponent, AutomationComponent, CloudComponent, DataAnalyticsComponent, DigitalCommerceComponent, FinanceConsultingComponent, InfrastructureComponent, SecurityComponent, SupplyChainFinanceComponent, TechnologyConsultingComponent, TechnologyInnovationComponent],
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
