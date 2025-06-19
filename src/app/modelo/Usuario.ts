export class Usuario {
  constructor(
    public idUsuario: number,
   public nombre: string,
   public correoElectronico: string,
   public telefono: string,
   public direccion: string,
   public fechaRegistro: string,
   public rol: string
  ) {
  }

}
