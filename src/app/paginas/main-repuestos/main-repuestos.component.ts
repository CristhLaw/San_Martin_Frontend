import { Component } from '@angular/core';
import { RepuestosService } from '../../servicio/repuestos.service';

@Component({
  selector: 'app-main-repuestos',
  standalone: true,
  imports: [],
  templateUrl: './main-repuestos.component.html',
  styleUrls: ['./main-repuestos.component.css']
})
export class MainRepuestosComponent {
  archivoSeleccionado: File | null = null;

  constructor(private repuestosService: RepuestosService) {}

  onFileSelected(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }


  subirExcel(): void {
    if (this.archivoSeleccionado) {
      this.repuestosService.subirExcel(this.archivoSeleccionado).subscribe({
        next: () => {
          alert('✅ Archivo importado con éxito.');
        },
        error: (err) => {
          console.error('❌ Error al subir archivo:', err);
          alert('⚠️ Error al subir archivo: ' + err.message);
        }
      });
    }
  }

  descargarExcel(): void {
    this.repuestosService.descargarExcel().subscribe({
      next: (response) => {
        const blob = new Blob([response], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'repuestos.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('❌ Error al descargar archivo:', err);
        alert('⚠️ Error al descargar Excel');
      }
    });
  }


}
