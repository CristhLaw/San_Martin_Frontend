import { Component, OnInit } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment.development';
import {UsuarioService} from '../../servicio/usuario.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  username: string="bienvenido";
  constructor(private UsuarioService: UsuarioService){}
  ngOnInit(): void {/*
    console.log("Llega aqui:"+this.username);
  const helper = new JwtHelperService();
  const token = sessionStorage.getItem(environment.TOKEN_NAME);

  if (typeof token === "string") {
  const decodedToken = helper.decodeToken(token);
  this.username = decodedToken.sub;
  }
    this.accesoService.getAccesosByUser(this.username).subscribe(data => this.accesoService.setAccesosChange(data));
  */
  }
 }

