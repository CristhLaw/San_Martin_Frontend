import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {Usuario} from '../modelo/Usuario';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario>{


  constructor(protected override  http: HttpClient) {
    super(http, `${environment.HOST}/usuario`);
  }
}
