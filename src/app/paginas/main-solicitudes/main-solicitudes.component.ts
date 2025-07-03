import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SolicitudRepuestoReport } from '../../modelo/Solicitudrepuesto';
import { SolicitudrepuestoService } from '../../servicio/solicitudrepuesto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Importación correcta del servicio Router

@Component({
  selector: 'app-main-solicitudes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-solicitudes.component.html',
  styleUrls: ['./main-solicitudes.component.css']
})
export class MainSolicitudesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'idSolicitud',
    'usuario',
    'bus',
    'descripcionDeFalla',
    'repuestos',
    'herramientas',
    'cantidad',
    'estado',
    'acciones'
  ];

  dataSource = new MatTableDataSource<SolicitudRepuestoReport>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private solicitudService: SolicitudrepuestoService,
    private router: Router // ✅ Inyección correcta del Router
  ) {}

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obtenerSolicitudes(): void {
    this.solicitudService.findAllReport().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('Error al cargar solicitudes:', err);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  aprobar(id: number): void {
    this.solicitudService.aprobarSolicitud(id).subscribe(() => {
      alert('Solicitud aprobada');
      this.obtenerSolicitudes(); // recarga la tabla
    });
  }

  rechazar(id: number): void {
    this.solicitudService.rechazarSolicitud(id).subscribe(() => {
      alert('Solicitud rechazada');
      this.obtenerSolicitudes(); // recarga la tabla
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/pages/detalle-solicitud', id]); // ✅ Uso correcto del Router
  }
}
