import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SolicitudrepuestoService } from '../../../servicio/solicitudrepuesto.service';
import { SolicitudRepuestoReport } from '../../../modelo/Solicitudrepuesto';



import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-detalle-solicitud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule
  ],
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetalleSolicitudComponent implements OnInit {
  id!: number;
  detalle!: SolicitudRepuestoReport;
  observacionRevision: string = '';

  constructor(
    private route: ActivatedRoute,
    private solicitudService: SolicitudrepuestoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.obtenerSolicitudPorId(this.id);
    });
  }

  obtenerSolicitudPorId(id: number): void {
    this.solicitudService.getDetalleSolicitud(id).subscribe({
      next: (data: SolicitudRepuestoReport) => {
        this.detalle = data;
      },
      error: (err: any) => {
        console.error('Error al obtener detalle de solicitud:', err);
      }
    });
  }

  aprobar(): void {
    this.actualizarEstado('APROBADO');
  }

  rechazar(): void {
    if (!this.observacionRevision.trim()) {
      alert('Debe ingresar una observación para rechazar.');
      return;
    }
    this.actualizarEstado('RECHAZADO');
  }

  actualizarEstado(nuevoEstado: string): void {
    const payload = {
      idSolicitud: this.id,
      estado: nuevoEstado,
      observacionRevision: this.observacionRevision
    };

    this.solicitudService.actualizarEstado(payload).subscribe({
      next: () => {
        alert(`Solicitud ${nuevoEstado.toLowerCase()} correctamente.`);
        this.obtenerSolicitudPorId(this.id); // 🔄 Refresca los datos actualizados
      },
      error: (err) => {
        console.error('Error al actualizar estado:', err);
        alert('Error al actualizar solicitud.');
      }
    });
  }

}

