import { Injectable } from '@angular/core';

import {GenericService} from './generic.service';
import {Herramientas} from '../modelo/Herramientas';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService extends GenericService<Herramientas>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/herramientas`)
  }
  listar(): Observable<Herramientas[]> {
    return this.http.get<Herramientas[]>(this.url);
  }
}
