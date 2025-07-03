import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SolicitudrepuestoService } from '../../servicio/solicitudrepuesto.service';
import { SolicitudRepuestoReport } from '../../modelo/Solicitudrepuesto';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SolicitudesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'idSolicitud',
    'usuario',
    'bus',
    'descripcionDeFalla',
    'repuestos',
    'herramientas',
    'cantidad',
    'estado'
  ];

  dataSource = new MatTableDataSource<SolicitudRepuestoReport>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private solicitudService: SolicitudrepuestoService) {}

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
        this.dataSource.data = data
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
}

//hola lola
