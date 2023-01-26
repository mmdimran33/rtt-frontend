import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { AboutComponent } from './about.component';
import { ApplicationServicesComponent } from './application-services/application-services.component';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';
import { AutomationComponent } from './automation/automation.component';
import { BussinessAlliancesComponent } from './bussiness-alliances/bussiness-alliances.component';
import { CloudComponent } from './cloud/cloud.component';
import { CoEComponent } from './co-e/co-e.component';
import { CSRComponent } from './csr/csr.component';
import { CustomersComponent } from './customers/customers.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { DigitalCommerceComponent } from './digital-commerce/digital-commerce.component';
import { FinanceConsultingComponent } from './finance-consulting/finance-consulting.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RootTronicsTechnologyComponent } from './root-tronics-technology/root-tronics-technology.component';
import { SecurityComponent } from './security/security.component';
import { SupplyChainFinanceComponent } from './supply-chain-finance/supply-chain-finance.component';
import { TechnologyConsultingComponent } from './technology-consulting/technology-consulting.component';
import { TechnologyInnovationComponent } from './technology-innovation/technology-innovation.component';

const routes: Routes = [{ path: '', component: AboutComponent },
                        { path: 'aboutUs', component: AboutUSComponent },
                        { path: 'management-team', component: ManagementTeamComponent },
                        { path: 'coe-page', component: CoEComponent },
                        { path: 'csr-page', component: CSRComponent },
                        { path: 'newsLetter', component: NewsletterComponent },
                        { path: 'customers', component: CustomersComponent },
                        { path: 'bussiness-alliances', component: BussinessAlliancesComponent },
                        { path: 'rootTronics', component: RootTronicsTechnologyComponent },
                        { path: 'application-services', component: ApplicationServicesComponent },
                        { path: 'artificial-intelligence', component: ArtificialIntelligenceComponent },
                        { path: 'automation', component: AutomationComponent },
                        { path: 'cloud', component: CloudComponent },
                        { path: 'data-analytics', component: DataAnalyticsComponent },
                        { path: 'digital-commerce', component: DigitalCommerceComponent },
                        { path: 'financ-consulting', component: FinanceConsultingComponent },
                        { path: 'infrastructure', component: InfrastructureComponent },
                        { path: 'security', component: SecurityComponent },
                        { path: 'supply-chain-finance', component: SupplyChainFinanceComponent },
                        { path: 'technology-consulting', component: TechnologyConsultingComponent },
                        { path: 'technology-innovation', component: TechnologyInnovationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
