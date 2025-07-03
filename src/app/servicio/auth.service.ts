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

        // ✅ Si usas token, guarda también el token (opcional)
        // sessionStorage.setItem(environment.TOKEN_NAME, response.token);

        // ✅ Redirigir si se desea automáticamente
        this.router.navigate(['/dashboard']); // Cambia la ruta según tu app
      })
    );
  }

  logout() {
    localStorage.removeItem('usuarioId');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  isLogged(): boolean {
    return sessionStorage.getItem(environment.TOKEN_NAME) != null;
  }
}
