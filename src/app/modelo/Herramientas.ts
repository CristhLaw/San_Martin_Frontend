export class Herramientas {
  constructor(
    public idHerramientas: number,
    public nombreHerramienta: string,
    public tamano: string,
    public descripcion: string,
    public fechaAdquisicion: string, // LocalDate -> string
    public estado: string,
    public ubicacion: string
  ) {}
}
