import { Button, TextField } from "@mui/material";
import ValidacoesCadastro from "contexts/ValidacoesCadastro";
import useErros from "hooks/useErros";
import React, { useState, useContext } from "react";

function DadosUsuario({ aoEnviar }) {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);


  

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({ user, senha });
      }
    }}>
      <TextField
        value={user}
        onChange={(event) => {
          event.preventDefault();
          setUser(event.target.value);
        }}
        id="user"
        name='user'
        label="user"
        type="text"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(event) => {
          event.preventDefault();
          setSenha(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name='senha'
        label="senha"
        type="password"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
