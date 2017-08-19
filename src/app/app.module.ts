import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FeatureRoutingModule} from './app-routing.module';
import {NvD3Module} from 'ng2-nvd3';

import Components from './components/components';
import Services from './services/services';

import 'd3';
import 'nvd3';

@NgModule({
    declarations: [
        Components.declarations
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        FeatureRoutingModule,
        NvD3Module
    ],
    exports: [
        Components.exports
    ],
    providers: [
        Services.providers
    ],
    bootstrap: [
        Components.bootstrap
    ]
})
export class AppModule {
}
