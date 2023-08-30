import React, { useState } from "react";
import DadosVisitantes from "./dadosVisitante";
import DadosUsuario from "./DadosUsuario";
import DadosLeito from "./DadosLeito";
import { Typography, fullWidth } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosVisitantes aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosLeito aoEnviar={aoEnviar} />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
