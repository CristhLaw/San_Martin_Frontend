import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Repuestos} from '../modelo/Repuestos';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService extends GenericService<Repuestos> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/repuesto`)
  }

  listar(): Observable<Repuestos[]> {
    return this.http.get<Repuestos[]>(this.url);
  }
}
