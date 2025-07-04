import { Usuario } from './Usuario';
import { Bus } from './Bus';

/** Interfaces para envío */
export interface RepuestoCantidad {
  idRepuesto: number;
  cantidad: number;
}

export interface HerramientaCantidad {
  idHerramienta: number;
  cantidad: number;
}

/** Modelo para crear o actualizar una solicitud */
export class SolicitudRepuesto {
  constructor(
    public descripcionDeFalla: string,
    public estado: string,
    public usuario: number, // ID del usuario
    public bus: number,     // ID del bus
    public repuestos: RepuestoCantidad[],
    public herramientas: HerramientaCantidad[],
    public observacionRevision?: string
  ) {}
}

/** Interfaces de detalles */
export interface DetalleRepuestoDTO {
  id: number;
  idRepuesto: number;
  nombreRepuesto: string;
  cantidad: number;
}
//completo sin diseño
export interface DetalleHerramientaDTO {
  id: number;
  idHerramienta: number;
  nombreHerramienta: string;
  cantidad: number;
}

/** Modelo para recibir el detalle completo */
export interface SolicitudRepuestoReport {
  idSolicitud: number;
  descripcionDeFalla: string;
  estado: string;
  usuario: Usuario;
  bus: Bus;
  detalleRepuestos: DetalleRepuestoDTO[];
  detalleHerramientas: DetalleHerramientaDTO[];
}
