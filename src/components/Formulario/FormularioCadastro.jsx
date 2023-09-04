import React, { useEffect, useState } from "react";
import DadosVisitantes from "./dadosVisitante";
import DadosUsuario from "./DadosUsuario";
import DadosLeito from "./DadosLeito";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosVisitantes aoEnviar={coletarDados} />,
    <DadosLeito aoEnviar={coletarDados} />,
    <Typography variant="h4" textAlign="center" sx={{ marginTop: 8 }}>
      Visitante cadastrado com Sucesso!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Autenticação</StepLabel>
        </Step>
        <Step>
          <StepLabel>Visitante</StepLabel>
        </Step>
        <Step>
          <StepLabel>Leito</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
