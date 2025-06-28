import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { SolicitudRepuesto } from '../../modelo/Solicitudrepuesto';
import { SolicitudrepuestoService } from '../../servicio/solicitudrepuesto.service';
import {MaterialModule} from '../../material/material.module';

@Component({
  selector: 'app-main-listasolicitudes',
  standalone: true,
  templateUrl: './main-listasolicitudes.component.html',
  styleUrls: ['./main-listasolicitudes.component.css'],
  imports: [CommonModule, MatTableModule, MatPaginatorModule,MaterialModule],
})
export class MainListasolicitudesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'idSolicitud',
    'usuario',
    'bus',
    'descripcionDeFalla',
    'repuestos',
    'herramientas',
    'cantidad',
    'estado',
  ];

  dataSource = new MatTableDataSource<SolicitudRepuesto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private solicitudService: SolicitudrepuestoService) {}

  ngOnInit(): void {
    this.solicitudService.findAll().subscribe({
      next: (data: SolicitudRepuesto[]) => {
        this.dataSource.data = data;
      },
      error: (err) => console.error('Error al cargar solicitudes:', err),
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
