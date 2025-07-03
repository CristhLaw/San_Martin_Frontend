import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {GenericService} from './generic.service';
import {Observable} from 'rxjs';
import {SolicitudRepuestoReport} from '../modelo/Solicitudrepuesto';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService extends GenericService<any>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/solicitudrepo`)

  }
  getAll(): Observable<SolicitudRepuestoReport[]> {
    return this.http.get<SolicitudRepuestoReport[]>(this.url);
  }

}
