import {Usuario} from './Usuario';
import {Bus} from './Bus';

export class SolicitudRepuesto {
  constructor(
    public idSolicitud: number,
   public nombreRepuesto: string,
   public descripcionRepuesto: string,
   public cantidad: number,
   public unidadMedida: string,
   public marca: string,
   public codigoFabricante: string,
   public herramientasNombre: string,
   public tamanoDescripcion: string,
   public descripcionDeFalla: string,
   public usuario: number,
   public bus: number
  ) {
  }
}

export class SolicitudRepuestoReport {
constructor(
  public idSolicitud: number,
  public nombreRepuesto: string,
  public descripcionRepuesto: string,
  public cantidad: number,
  public unidadMedida: string,
  public marca: string,
  public codigoFabricante: string,
  public herramientasNombre: string,
  public tamanoDescripcion: string,
  public descripcionDeFalla: string,
  public usuario: Usuario,
  public bus: Bus
) {
}

}
