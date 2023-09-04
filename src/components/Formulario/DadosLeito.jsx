import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function DadosLeito({ aoEnviar }) {
  const [enfermaria, setEnfermaria] = useState("")
  const [apartamento, setApartamento] = useState("")
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({enfermaria, apartamento})
    }}>
      <FormControl sx={{ marginTop: 1, minWidth: 268 }}>
        <InputLabel id="enfermaria_id">Enfermaria</InputLabel>
        <Select
          value={enfermaria}
          onChange={(event) => {
            event.preventDefault();
            setEnfermaria(event.target.value);
          }}
          id="enfermaria"
          name='enfermaria'
          label="enfermaria"
          type="text"
          variant="outlined"

          margin="normal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Enf01"}>Enf01</MenuItem>
          <MenuItem value={"Enf02"}>Enf02</MenuItem>
          <MenuItem value={"Enf03"}>Enf03</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 268 }}>
        <InputLabel id="apartamento_id">Apartamento</InputLabel>
        <Select
          value={apartamento}
          onChange={(event => {
            event.preventDefault();
            setApartamento(event.target.value)
          })}
          id="apartamento"
          name='apartamento'
          label="apartamento"
          type="text"
          variant="outlined"

          margin="normal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Apt01</MenuItem>
          <MenuItem value={20}>Apt02</MenuItem>
          <MenuItem value={30}>Apt03</MenuItem>
        </Select>
      </FormControl>
      <Button fullWidth type="submit" variant="contained" color="primary">
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosLeito;
