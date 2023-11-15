import { MouseEventHandler } from "react";

export interface PropsBotonPersonalizado {
  titulo: string;
  estilosContenedor?: string;
  manejarClic?: MouseEventHandler<HTMLButtonElement>;
}
