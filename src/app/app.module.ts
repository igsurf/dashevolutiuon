import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeatureRoutingModule } from './app-routing.module';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { SocketService } from "app/socket.service";
import { DashboardsComponent } from './dashboards/dashboards.component';
import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuditoriaComponent,
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FeatureRoutingModule,
    NvD3Module
  ],
  providers: [SocketService],
  bootstrap: [AppComponent,NavBarComponent]
})
export class AppModule { }
