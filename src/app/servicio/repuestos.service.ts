import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GenericService } from './generic.service';
import { Repuestos } from '../modelo/Repuestos';

@Injectable({ providedIn: 'root' })
export class RepuestosService extends GenericService<Repuestos> {

  // URL base para la entidad Repuestos (genérica)
  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/repuesto`);
  }

  // Obtener todos los repuestos
  listar(): Observable<Repuestos[]> {
    return this.http.get<Repuestos[]>(this.url);
  }

  subirExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${environment.HOST}/api/excel/importar-repuestos`, formData);
  }

  descargarExcel(): Observable<Blob> {
    return this.http.get(`${environment.HOST}/api/excel/exportar-repuestos`, {
      responseType: 'blob'
    });
  }




}
