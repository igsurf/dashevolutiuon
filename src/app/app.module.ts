import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FeatureRoutingModule} from './app-routing.module';
import {SocketService} from 'app/socket.service';
import {NvD3Module} from 'ng2-nvd3';

import Components from './components/components';

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
    providers: [SocketService],
    bootstrap: [
        Components.bootstrap
    ]
})
export class AppModule {
}
