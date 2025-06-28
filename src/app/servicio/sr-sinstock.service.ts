import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {SrSinstock} from '../modelo/Srsinstock';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SrSinstockService extends GenericService<SrSinstock>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/san_sr_sinstock`)

  }
}
