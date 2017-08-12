import { Component, OnInit } from '@angular/core';
import { Auditoria } from "app/models/auditoria.model";
import { ActivatedRoute, Router } from "@angular/router";
import {Http} from '@angular/http';

@Component({
  selector: 'app-lista-auditoria',
  templateUrl: './lista-auditoria.component.html',
  styleUrls: ['./lista-auditoria.component.css']
})
export class ListaAuditoriaComponent implements OnInit {
  listaAuditorias;

  constructor(private route: ActivatedRoute, private router: Router, private http: Http) {
    this.http.get('http://localhost:3000/auditoria').subscribe(res => {
      let json = res.json();

      this.listaAuditorias = json;
    });
  }

  ngOnInit() {
  }

  openAuditoria(auditoria: Auditoria) {
    this.router.navigate(['live_auditoria']);
  }

}
