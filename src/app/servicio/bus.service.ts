import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Bus } from '../modelo/Bus';
import { GenericService } from './generic.service';  // Asumiendo que tienes un GenericService

@Injectable({
  providedIn: 'root'
})
export class BusService extends GenericService<Bus> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/buses`);  // URL base para la API de buses
  }

  listar(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.url);
  }

}
