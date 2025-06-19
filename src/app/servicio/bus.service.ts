import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Bus} from '../modelo/Bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private url: string = `${environment.HOST}/Buses`;
  private busSubject: BehaviorSubject<Bus[]> = new BehaviorSubject<Bus[]>([]);
  Bus$: Observable<Bus[]> = this.busSubject.asObservable()

  constructor(private http: HttpClient) { }

  findAll(){
    this.http.get<Bus[]>(this.url).subscribe(data => {
      this.busSubject.next(data);
    });
  }

  findById(id: number){
    return this.http.get<Bus[]>(this.url+`/${id}`)
  }
  save(Bus: Bus):Observable<Bus>{
    return this.http.post<Bus>(this.url,Bus).pipe(
      tap(() => this.findAll()),
    );
  }

  update(id: number, Bus: Bus): Observable<Bus> {

    return this.http.put<Bus>(this.url+`/${id}`, Bus).pipe(
      tap(() => this.findAll()),
    );
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(this.url+`/${id}`).pipe(
      tap(() => this.findAll()),
    )
  }


  getBuses() {

  }
}
