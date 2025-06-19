import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';  // Para crear un formControl
import { BusService } from '../../servicio/bus.service';
import { Bus } from '../../modelo/Bus';
import { CommonModule } from '@angular/common';  // Importar CommonModule para directivas como *ngFor y *ngIf
import { ReactiveFormsModule } from '@angular/forms';  // Para usar formControl
import { MatFormFieldModule } from '@angular/material/form-field';  // Para mat-form-field
import { MatInputModule } from '@angular/material/input';  // Para matInput
import { MatAutocompleteModule } from '@angular/material/autocomplete';  // Para mat-autocomplete
import { MatOptionModule } from '@angular/material/core';  // Para mat-option

@Component({
  standalone: true,  // Esto indica que el componente es independiente
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Para manejar formularios reactivos
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule
  ],
  selector: 'app-main-solicitarrepo',
  templateUrl: './main-solicitarrepo.component.html',
  styleUrls: ['./main-solicitarrepo.component.css']
})
export class MainSolicitarrepoComponent implements OnInit {
  busControl = new FormControl();  // Control del formulario para el autocompletado
  busesFiltrados: Bus[] = [];  // Arreglo para almacenar buses filtrados
  selectedBus: Bus | null = null;  // El bus seleccionado

  constructor(private busService: BusService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener todos los buses cuando el componente se inicializa
    this.busService.getBuses();  // Obtener los buses
    this.busService.Bus$.subscribe((buses) => {
      this.busesFiltrados = buses;  // Asignar los buses a busesFiltrados
    });
  }

  // Método para filtrar los buses según lo que el usuario escribe
  filterBus(): void {
    const query = this.busControl.value?.toLowerCase();
    if (query) {
      this.busesFiltrados = this.busesFiltrados.filter(bus =>
        bus.placa.toLowerCase().includes(query)  // Filtra por la placa del bus
      );
    }
  }

  // Método que se llama cuando se selecciona un bus
  seleccionarBus(placa: string): void {
    this.selectedBus = this.busesFiltrados.find(bus => bus.placa === placa) || null;  // Busca el bus seleccionado por placa
  }
}
