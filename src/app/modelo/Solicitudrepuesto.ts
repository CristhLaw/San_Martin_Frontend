import { Usuario } from './Usuario';
import { Bus } from './Bus';
import { Repuestos } from './Repuestos';
import { Herramientas } from './Herramientas';

export interface RepuestoCantidad {
  idRepuesto: number;
  cantidad: number;
}

export interface HerramientaCantidad {
  idHerramienta: number;
  cantidad: number;
}

// DTO para enviar al backend (crear o actualizar)
export class SolicitudRepuesto {
  constructor(
    public descripcionDeFalla: string,
    public estado: string,
    public usuario: number, // ID numérico
    public bus: number,     // ID numérico
    public repuestos: RepuestoCantidad[],
    public herramientas: HerramientaCantidad[]
  ) {}
}

// DTO para recibir datos detallados desde el backend (reporte completo)
export class SolicitudRepuestoReport {
  constructor(
    public idSolicitud: number,
    public descripcionDeFalla: string,
    public estado: string,
    public usuario: Usuario,
    public bus: Bus,
    public detalleRepuestos: { repuesto: Repuestos; cantidad: number }[],
    public detalleHerramientas: { herramienta: Herramientas; cantidad: number }[]
  ) {}
}
