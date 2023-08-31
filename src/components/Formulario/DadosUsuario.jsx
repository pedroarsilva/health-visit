import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ user, senha });
    }}>
      <TextField
        value={user}
        onChange={(event) => {
          event.preventDefault();
          setUser(event.target.value);
        }}
        id="user"
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
        id="senha"
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
