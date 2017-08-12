import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideoStreamFrameComponent } from './video-stream-frame/video-stream-frame.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { LiveAuditoriaComponent } from './live-auditoria/live-auditoria.component';
import { FeatureRoutingModule } from './app-routing.module';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { ListaAuditoriaComponent } from './lista-auditoria/lista-auditoria.component';
import { AuditoriaItemDetailComponent } from './lista-auditoria/auditoria-item-detail/auditoria-item-detail.component';
import { UsersInLiveComponent } from './users-in-live/users-in-live.component';
import { SocketService } from "app/socket.service";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VideoStreamFrameComponent,
    LiveChatComponent,
    LiveAuditoriaComponent,
    AuditoriaComponent,
    ListaAuditoriaComponent,
    AuditoriaItemDetailComponent,
    UsersInLiveComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FeatureRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent,NavBarComponent]
})
export class AppModule { }
