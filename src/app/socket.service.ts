import {Injectable} from '@angular/core';
import {Subject, Observable, BehaviorSubject} from "rxjs/Rx";
import {Mensagem} from "app/models/mensagem";
import * as io from 'socket.io-client';
import {Router} from '@angular/router';


@Injectable()
export class SocketService {

  constructor(public router: Router) {
  }

  // private url = 'https://warm-wildwood-70824.herokuapp.com/chat';
  private url = 'http://localhost:3000/dashboard';

  mensagens: Mensagem;
  private socket;

  public user$: BehaviorSubject<String> = new BehaviorSubject(this.users);

  private _users;
  public get users() {
    return this._users;
  }

  public set users(data) {
    this._users = data;
    this.user$.next(data);
  }

  public messages$: BehaviorSubject<Mensagem> = new BehaviorSubject(this.messages);

  private _messages: Mensagem;
  public get messages() {
    return this._messages;
  }

  public set messages(data: Mensagem) {
    this._messages = data;
    this.messages$.next(data);
  }

  public dadosGraficoLinguagem$: BehaviorSubject<Object> = new BehaviorSubject(this.dadosGraficoLinguagens);

  private _dadosGraficoLinguagem;
  public get dadosGraficoLinguagens() {
    return this._dadosGraficoLinguagem;
  }

  public set dadosGraficoLinguagens(data) {
    this._dadosGraficoLinguagem = data;
    this.dadosGraficoLinguagem$.next(data);
  }

  private subject = new Subject<any>();

  connect() {
    this.socket = io(this.url);

    this.socket.on('connection', () => {
      console.log('connection', 'Conectado ao websocket.');
    });

    this.socket.on('user joined', (data) => {
      this.users = data;
    });

    this.socket.on('new message', (data) => {
      this.messages = data;
    });

    this.socket.on('go auditoria', () => {
      this.router.navigate(['lista_auditoria'])
    });

    this.socket.on('users', (data) => {
      var newObj = {
        users: data.users
      }

      if (this.users) {
        this.users.users = data.users;
      } else {
        this.users = newObj;
      }
    });

    this.socket.on('carregarGraficoLinguagens', (data) => {
      this.dadosGraficoLinguagens = data;
    });
  }

  getMessages() {
    const observable = new Observable<Mensagem>(observer => {

    });
    return observable;
  }

  getDadosGraficoMensagem() {
    const observable = new Observable<Object>(observer => {

    });
    return observable;
  }

  onUserJoined() {
    const observable = new Observable<Mensagem>(observer => {
    });
    return observable;
  }

  sendMessage(message) {
    this.socket.emit('new message', message);
    console.log("msg enviada");
  }

  userLogin(userName: string) {
    this.socket.emit('add user', userName);
  }

  endStream() {
    this.socket.emit('end stream');
  }
}
