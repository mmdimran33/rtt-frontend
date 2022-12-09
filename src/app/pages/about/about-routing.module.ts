import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { AboutComponent } from './about.component';
import { BussinessAlliancesComponent } from './bussiness-alliances/bussiness-alliances.component';
import { CoEComponent } from './co-e/co-e.component';
import { CSRComponent } from './csr/csr.component';
import { CustomersComponent } from './customers/customers.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RootTronicsTechnologyComponent } from './root-tronics-technology/root-tronics-technology.component';

const routes: Routes = [{ path: '', component: AboutComponent },
                        { path: 'aboutUs', component: AboutUSComponent },
                        { path: 'management-team', component: ManagementTeamComponent },
                        { path: 'coe-page', component: CoEComponent },
                        { path: 'csr-page', component: CSRComponent },
                        { path: 'newsLetter', component: NewsletterComponent },
                        { path: 'customers', component: CustomersComponent },
                        { path: 'bussiness-alliances', component: BussinessAlliancesComponent },
                        { path: 'rootTronics', component: RootTronicsTechnologyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
