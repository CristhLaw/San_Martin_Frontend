import { Component, OnInit } from '@angular/core';
import {BusService} from '../../../servicio/bus.service';
import {RepuestosService} from '../../../servicio/repuestos.service';
import {HerramientasService} from '../../../servicio/herramientas.service';
import {SolicitudrepuestoService} from '../../../servicio/solicitudrepuesto.service';
import {SolicitudRepuesto} from '../../../modelo/Solicitudrepuesto';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-formsolicitar',
  standalone: true,
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatCardModule
  ],
  templateUrl: './formsolicitar.component.html',
  styleUrls: ['./formsolicitar.component.css']
})
export class FormsolicitarComponent implements OnInit {

  buses: any[] = [];
  repuestosCombinados: any[] = [];
  herramientasCombinadas: any[] = [];
  itemsCombinados: any[] = [];

  selectedBus: any;
  descripcionFalla: string = '';
  itemSeleccionado: any;
  itemsSeleccionados: any[] = [];

  usuario = { idUsuario: 1 }; // Puedes cambiar esto por el usuario logueado

  constructor(
    private busService: BusService,
    private repuestoService: RepuestosService,
    private herramientaService: HerramientasService,
    private solicitudService: SolicitudrepuestoService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.busService.listar().subscribe(data => this.buses = data);
    this.repuestoService.listar().subscribe(data => {
      this.repuestosCombinados = data;
      this.actualizarItemsCombinados();
    });
    this.herramientaService.listar().subscribe(data => {
      this.herramientasCombinadas = data;
      this.actualizarItemsCombinados();
    });
  }

  actualizarItemsCombinados() {
    this.itemsCombinados = [
      ...this.repuestosCombinados.map(r => ({ tipo: 'repuesto', id: r.idRepuestos, nombre: r.nombreRepuesto, cantidad: 1 })),
      ...this.herramientasCombinadas.map(h => ({ tipo: 'herramienta', id: h.idHerramientas, nombre: h.nombreHerramienta, cantidad: 1 }))
    ];
  }

  agregarItem() {
    if (this.itemSeleccionado && !this.itemsSeleccionados.find(i => i.id === this.itemSeleccionado.id && i.tipo === this.itemSeleccionado.tipo)) {
      this.itemsSeleccionados.push({ ...this.itemSeleccionado });
    }
    this.itemSeleccionado = null;
  }

  quitarItem(item: any) {
    this.itemsSeleccionados = this.itemsSeleccionados.filter(i => !(i.id === item.id && i.tipo === item.tipo));
  }

  guardarSolicitud() {
    const repuestos = this.itemsSeleccionados
      .filter(i => i.tipo === 'repuesto')
      .map(i => ({ idRepuesto: i.id, cantidad: i.cantidad }));

    const herramientas = this.itemsSeleccionados
      .filter(i => i.tipo === 'herramienta')
      .map(i => ({ idHerramienta: i.id, cantidad: i.cantidad }));

    const solicitud = new SolicitudRepuesto(
      this.descripcionFalla,
      'PENDIENTE',
      this.usuario.idUsuario,
      this.selectedBus.idbus,
      repuestos,
      herramientas
    );

    this.solicitudService.insertarSolicitud(solicitud).subscribe(() => {
      alert('Solicitud guardada correctamente');
      this.resetForm();
    });
  }

  resetForm() {
    this.descripcionFalla = '';
    this.selectedBus = null;
    this.itemsSeleccionados = [];
  }
}
//holalola
