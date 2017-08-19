import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardsComponent } from './components/components';


const routes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'dashboards', component: DashboardsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
