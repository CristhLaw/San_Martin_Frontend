import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import { tap } from 'rxjs/operators';

interface ICredencialesRequest {
  user: string;
  clave: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = `${environment.HOST}/users`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: string, clave: string) {
    const body: ICredencialesRequest = { user, clave };
    return this.http.post<Usuario>(this.url + `/login`, body).pipe(
      tap(data => {
        sessionStorage.setItem(environment.TOKEN_NAME, data.token);
        sessionStorage.setItem(environment.DATA_USERLOGIN, data.idUsuario.toString());
      })
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  isLogged() {
    return sessionStorage.getItem(environment.TOKEN_NAME) != null;
  }
}
