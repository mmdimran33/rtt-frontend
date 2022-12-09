import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { FormsComponent } from './forms.component';

const routes: Routes = [{ path: '', component: FormsComponent },
                        { path:'contact-us', component: ContactUSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { 
  constructor(){
    console.log('FormsRoutingModule constructer called!!!!!!!!');
  }
}
