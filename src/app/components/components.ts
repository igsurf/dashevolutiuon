import {DashboardsComponent} from './dashboards/dashboards.component';
import {AppComponent} from '../app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

export {DashboardsComponent} from './dashboards/dashboards.component';
export {AppComponent} from '../app.component';
export {NavBarComponent} from './nav-bar/nav-bar.component';

export default class Components {
  public static declarations = [
      DashboardsComponent,
      AppComponent,
      NavBarComponent
  ];

  public static exports = [
      DashboardsComponent,
      AppComponent,
      NavBarComponent
  ];

  public static bootstrap = [
      AppComponent,
      NavBarComponent
  ];
};
