import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GenericService } from './generic.service';
import { SolicitudRepuesto } from '../modelo/Solicitudrepuesto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudrepuestoService extends GenericService<SolicitudRepuesto> {

  constructor(protected override http: HttpClient) {
    // ✅ Elimina slashes duplicados por seguridad
    const cleanedUrl = `${environment.HOST}/solicitudrepo`.replace(/\/+$/, '');
    super(http, cleanedUrl);
  }

  // ✅ Si necesitas usar token manualmente (opcional si usas interceptor)
  override findAll(): Observable<SolicitudRepuesto[]> {
    const token = sessionStorage.getItem(environment.TOKEN_NAME);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<SolicitudRepuesto[]>(this.url, { headers });
  }

  override save(t: SolicitudRepuesto): Observable<SolicitudRepuesto> {
    const token = sessionStorage.getItem(environment.TOKEN_NAME);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<SolicitudRepuesto>(this.url, t, { headers });
  }
}
