import Rodape from './components/Rodape';
import './App.css';
import Banner from './components/Banner';

import { Container, Typography } from '@mui/material';
import FormularioCadastro from 'components/Formulario/FormularioCadastro';
import { validarCPF, validarSenha } from 'models/cadastroCpf';

function App() {
  return (
    <>
      <Banner />
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' align='center'>Registro de Visitas</Typography >
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validacoes={{ cpf: validarCPF, senha: validarSenha }} />
      </Container>
      <Rodape />
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados)
}



export default App;
