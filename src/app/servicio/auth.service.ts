import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import { Observable, tap } from 'rxjs';

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
  ) {}

  login(user: string, clave: string): Observable<Usuario> {
    const body: ICredencialesRequest = { user, clave };

    return this.http.post<Usuario>(`${this.url}/login`, body).pipe(
      tap((response: Usuario) => {
        // ✅ Guardar el ID del usuario en localStorage
        localStorage.setItem('usuarioId', response.idUsuario.toString());

        // ✅ Redirigir al dashboard (ajústalo según tu aplicación)
        this.router.navigate(['/dashboard']);
      })
    );
  }

  getUsuarioId(): number | null {
    const id = localStorage.getItem('usuarioId');
    return id ? +id : null;
  }

  logout() {
    localStorage.removeItem('usuarioId');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  isLogged(): boolean {
    return localStorage.getItem('usuarioId') != null;
  }
}
