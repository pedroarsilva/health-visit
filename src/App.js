import Rodape from "./components/Rodape";
import "./App.css";
import Banner from "./components/Banner";

import { Container, Typography } from "@mui/material";
import FormularioCadastro from "components/Formulario/FormularioCadastro";
import { validarCPF, validar } from "models/cadastro";
import ValidacoesCadastro from "contexts/ValidacoesCadastro";

function App() {
  return (
    <>
      <Banner />
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" textAlign="center" sx={{ marginBottom: 8 }}>
          Registro de Visitas
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validar,
            paciente: validar,
            visitante: validar,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
      <Rodape />
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
