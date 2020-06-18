import { SubmitComponent } from './submit/submit.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    component: DetailsComponentComponent,
  },
  {
    path: 'submit',
    component: SubmitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
