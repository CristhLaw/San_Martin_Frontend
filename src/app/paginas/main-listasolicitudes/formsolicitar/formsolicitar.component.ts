import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { OrderListModule } from 'primeng/orderlist';
import { TextareaModule } from 'primeng/textarea';

import { Bus } from '../../../modelo/Bus';
import { Repuestos } from '../../../modelo/Repuestos';
import { Herramientas } from '../../../modelo/Herramientas';

import { BusService } from '../../../servicio/bus.service';
import { RepuestosService } from '../../../servicio/repuestos.service';
import { HerramientasService } from '../../../servicio/herramientas.service';

import { forkJoin } from 'rxjs';
import {MultiSelect} from 'primeng/multiselect'; // ✅ Necesario para combinar peticiones

@Component({
  selector: 'app-formsolicitar',
  standalone: true,
  templateUrl: './formsolicitar.component.html',
  styleUrls: ['./formsolicitar.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    OrderListModule,
    TextareaModule,
    NgIf,
    MultiSelect
  ],
})
export class FormsolicitarComponent implements OnInit {
  value: string = '';

  // Bus
  buses: Bus[] = [];
  selectedBus: Bus | null = null;

  // Repuestos y Herramientas (listas originales)
  repuestos: Repuestos[] = [];
  herramientas: Herramientas[] = [];

  // Lista combinada
  opcionesCombinadas: any[] = [];

  // Opción seleccionada (repuesto o herramienta)
  opcionesSeleccionadas: any[] = [];


  constructor(
    private busService: BusService,
    private repuestosService: RepuestosService,
    private herramientasService: HerramientasService
  ) {}

  ngOnInit(): void {
    this.getBuses();
    this.cargarOpcionesCombinadas();
  }

  getBuses(): void {
    this.busService.findAll().subscribe({
      next: (data: Bus[]) => (this.buses = data),
      error: (err) => console.error('Error al cargar buses:', err),
    });
  }

  cargarOpcionesCombinadas(): void {
    forkJoin([
      this.repuestosService.findAll(),
      this.herramientasService.findAll()
    ]).subscribe({
      next: ([repuestos, herramientas]) => {
        // Adaptar modelos para el dropdown
        const listaRepuestos = repuestos.map(r => ({
          id: r.idRepuestos,
          nombre: r.nombreRepuesto,
          tipo: 'Repuesto'
        }));

        const listaHerramientas = herramientas.map(h => ({
          id: h.idHerramienta,
          nombre: h.nombreHerramienta,
          tipo: 'Herramienta'
        }));

        this.opcionesCombinadas = [...listaRepuestos, ...listaHerramientas];
      },
      error: (err) => console.error('Error al cargar repuestos y herramientas:', err)
    });
  }
}
