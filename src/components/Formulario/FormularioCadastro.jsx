import React, { useState } from 'react';
import DadosVisitantes from './dadosVisitante';
import DadosUsuario from './DadosUsuario';
import DadosLeito from './DadosLeito';

function FormularioCadastro({ aoEnviar, validarCPF }) {


  return (
    <>
      <DadosVisitantes aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario/>
      <DadosLeito />
    </>
  );
}
export default FormularioCadastro