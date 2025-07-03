export class Repuestos {
  constructor(
    public idRepuestos: number,
    public nombreRepuesto: string,
    public descripcion: string,
    public cantidad: number,
    public marca: string,
    public codigoFabricante: string,
    public unidadMedida: string
  ) {}
}
