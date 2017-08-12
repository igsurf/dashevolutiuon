import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SocketService} from '../socket.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-live-auditoria',
  templateUrl: './live-auditoria.component.html',
  styleUrls: ['./live-auditoria.component.css']
})
export class LiveAuditoriaComponent implements OnInit {
  idLiveStream;
  nameUserLiveStream = '';
  nameFormUserLiveStream = '';
  nameLiveStream = '';
  users;
  auditoriaName;

  constructor(private route: ActivatedRoute,
              private socketService: SocketService,
              private http: Http) {
    socketService.user$.subscribe(
      data => {
        this.users = data;
      });

    this.http.get('http://localhost:3000/auditoria/isActive').subscribe(res => {
      let json = res.json();
      this.auditoriaName = json.name;
    });
  }

  ngOnInit() {
    this.idLiveStream = this.route.snapshot.params['id'];
    if (this.idLiveStream) {
      //this.usersService.requestUser('teste');
    }

  }

  enableChat() {
    this.socketService.userLogin(this.nameFormUserLiveStream);
  }

  endAuditoria() {
    this.http.get('http://localhost:3000/auditoria/stop').subscribe(res => {
      this.socketService.endStream();
    });
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }

  //TRATATAMENTO PARA NGMODEL DOS INPUTS
  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-control': true,
      'form-control-danger': !isValid && !isPristine,
      'form-control-success': isValid && !isPristine
    };
  }

}
