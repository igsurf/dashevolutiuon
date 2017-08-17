import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuditoriaComponent } from "app/auditoria/auditoria.component";
import { DashboardsComponent } from "app/dashboards/dashboards.component";


const routes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'auditoria', component: AuditoriaComponent },
    { path: 'dashboards', component: DashboardsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
