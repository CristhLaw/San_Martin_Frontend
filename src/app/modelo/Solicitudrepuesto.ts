import {Usuario} from './Usuario';
import {Bus} from './Bus';
import {Herramientas} from './Herramientas';
import {Repuestos} from './Repuestos';
import {SrSinstock} from './Srsinstock';

export class SolicitudRepuesto {
  constructor(
    public idSolicitud: number,
    public usuario: Usuario,
    public bus: Bus,
    public descripcionDeFalla: string,
    public repuestos: Repuestos,
    public cantidad: number,
    public herramientas: Herramientas,
    public estado: string
  ) {}
}


export class SolicitudRepuestoReport {
constructor(
  public idSolicitud: number,
  public usuario: Usuario,
  public bus: Bus,
  public descripcionDeFalla: string,
  public cantidad: number,
  public herramientas: Herramientas,
  public repuestos: Repuestos,
  public estado: string
) {
}

}
