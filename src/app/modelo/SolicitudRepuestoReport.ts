

export interface SolicitudRepuestoReport {
  idSolicitud: number;
  descripcionDeFalla: string;
  estado: string;
  observacionRevision: string;

  usuario: {
    idUsuario: number;
    user: string;
    estado: string;
  };

  bus: {
    idbus: number;
    placa: string;
    modelo: string;
    estado: string;
  };

  detalleRepuestos: {
    nombreRepuesto: string;
    cantidad: number;
  }[];

  detalleHerramientas: {
    nombreHerramienta: string;
    cantidad: number;
  }[];
}
