import { Component, OnInit, Input } from '@angular/core';
import { Auditoria } from "app/models/auditoria.model";

@Component({
  selector: 'app-auditoria-item-detail',
  templateUrl: './auditoria-item-detail.component.html',
  styleUrls: ['./auditoria-item-detail.component.css']
})
export class AuditoriaItemDetailComponent implements OnInit {

  @Input() auditoriaDetail : Auditoria
  @Input() index : number;

  constructor() { }

  ngOnInit() {
  }



}
