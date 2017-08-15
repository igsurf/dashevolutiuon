import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LiveAuditoriaComponent } from './live-auditoria/live-auditoria.component';
import { AuditoriaComponent } from "app/auditoria/auditoria.component";
import { ListaAuditoriaComponent } from "app/lista-auditoria/lista-auditoria.component";
import { DashboardsComponent } from "app/dashboards/dashboards.component";


const routes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'auditoria', component: AuditoriaComponent },
    { path: 'live_auditoria', component: LiveAuditoriaComponent},
    { path: 'live_auditoria/:id', component: LiveAuditoriaComponent },
    { path: 'lista_auditoria', component: ListaAuditoriaComponent },
    { path: 'dashboards', component: DashboardsComponent }


// , children: [
//       {path: ':id', component: LiveAuditoriaComponent}
//     ]

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
