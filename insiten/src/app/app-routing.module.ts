import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TargetsComponent } from './targets/targets.component';
import { TargetDetailsComponent } from './targets/target-lists/target-details/target-details.component'

const routes: Routes = [
  { path: 'target/details/:id', component: TargetDetailsComponent },
  { path: 'targets', component: TargetsComponent },
  {path: '', component: DashboardComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
