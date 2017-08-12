import {Component, OnInit, OnDestroy} from '@angular/core';
import {Auditoria} from "app/models/auditoria.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SocketService} from "app/socket.service";
import {User} from "app/models/user.model";
import {Http} from "@angular/http";

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit, OnDestroy {
  auditoria: Auditoria;
  usuario: User;
  isLiveActive = false;
  json = '';

  constructor(private route: ActivatedRoute, private router: Router,
              private socketService: SocketService,
              private http: Http) {
    this.auditoria = new Auditoria(0, '', null, '', '');
    this.usuario = new User(0, '');

    this.http.get('http://localhost:3000/auditoria/isActive').subscribe(res => {
      try {
        this.json = res.json() || '';
        if (this.json)
          this.router.navigate(['live_auditoria']);
      } catch (err) {
        console.log(err);
      }
    });

  }

  ngOnInit() {
    this.socketService.connect();
    if (this.isLiveActive === true)
      this.router.navigate(['live_auditoria']);
  }

  onSubmit() {
    this.isLiveActive = true;
    this.socketService.userLogin(this.usuario.name);
    let body = {name: this.auditoria.nome};
    this.http.post('http://localhost:3000/auditoria/start', body).subscribe(res => {
      console.log(res.json());
    });
    this.router.navigate(['live_auditoria']);
  }

  startStream() {
    this.isLiveActive = !this.isLiveActive;
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

  ngOnDestroy() {
  }
}
