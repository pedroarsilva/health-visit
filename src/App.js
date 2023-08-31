import Rodape from './components/Rodape';
import './App.css';
import Banner from './components/Banner';

import { Container, Typography } from '@mui/material';
import FormularioCadastro from 'components/Formulario/FormularioCadastro';

function App() {
  return (
    <>
      <Banner />
      <section>
        <Container component="article" maxWidth="sm">
          <Typography variant='h3' align='center'>Registro de Visitas</Typography >
          <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
        </Container>
        <Rodape />
      </section>
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
