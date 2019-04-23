import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetsComponent } from './targets/targets.component';
import { TargetDetailsComponent } from './targets/target-lists/target-details/target-details.component'

const routes: Routes = [
  { path: 'target/details/:id', component: TargetDetailsComponent },
  { path: '', component: TargetsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
