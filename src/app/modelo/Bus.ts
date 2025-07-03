export class Bus {
  constructor(
    public idbus: number,
    public placa: string,
    public numeroIdentificador: string,
    public modelo: string,
    public capacidad: string,
    public estado: string,
    public fechaAdquisicion: string,
    public ultimoMantenimiento: string // LocalDateTime -> string
  ) {}
}
