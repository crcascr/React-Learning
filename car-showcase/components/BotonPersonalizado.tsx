"use client";

import { PropsBotonPersonalizado } from "@/types";
import Image from "next/image";

function BotonPersonalizado({
  titulo,
  estilosContenedor,
  manejarClic,
}: PropsBotonPersonalizado) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${estilosContenedor}`}
      onClick={manejarClic}
    >
      <span className={`flex-1`}>{titulo}</span>
    </button>
  );
}

export default BotonPersonalizado;
