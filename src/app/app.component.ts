import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router'; // 👈 necesario


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 👈 aquí agregas RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sys-almacen';
}
