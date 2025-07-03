import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-solicitud',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSortModule],
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalleSolicitudComponent implements OnInit {
  id!: number;


  solicitudDetalle = {
    estado: 'Pendiente',
    solicitante: 'Juan Pérez',
    descripcionDeFalla: 'No enciende el motor',
    cargo: 'Técnico de mantenimiento'


  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', this.id);
    // Aquí podrías hacer una llamada al backend para cargar los datos reales con el id
  }
}
