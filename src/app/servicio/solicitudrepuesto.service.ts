import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import {SolicitudRepuesto, SolicitudRepuestoReport} from '../modelo/Solicitudrepuesto';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudrepuestoService extends GenericService<SolicitudRepuesto> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/solicitudrepo`);
  }

  // 🔽 Agrega este método correctamente tipado
  findAllReport(): Observable<SolicitudRepuestoReport[]> {
    return this.http.get<SolicitudRepuestoReport[]>(this.url);
  }

  aprobarSolicitud(id: number): Observable<void> {
    return this.http.put<void>(`${this.url}/aprobar/${id}`, {});
  }

  rechazarSolicitud(id: number): Observable<void> {
    return this.http.put<void>(`${this.url}/rechazar/${id}`, {});
  }

  findByIdReport(id: number): Observable<SolicitudRepuestoReport> {
    return this.http.get<SolicitudRepuestoReport>(`${this.url}/${id}`);
  }
  insertarSolicitud(solicitud: any): Observable<any> {
    return this.http.post(this.url, solicitud);
  }





}
