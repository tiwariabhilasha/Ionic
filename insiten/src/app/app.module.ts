import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { TargetsComponent } from './targets/targets.component';
import { TargetListsComponent } from './targets/target-lists/target-lists.component';
import { TargetDetailsComponent } from './targets/target-lists/target-details/target-details.component';
import { TargetsService } from './targets.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TargetsComponent,
    TargetListsComponent,
    TargetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [TargetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
