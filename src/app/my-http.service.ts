import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class MyHttpService {

  constructor(private http: Http) { }

}
