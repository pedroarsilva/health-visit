import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField
        id="user"
        label="user"
        type="text"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
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
