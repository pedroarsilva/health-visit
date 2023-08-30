import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function DadosLeito() {
  return (
    <form>
      <FormControl sx={{marginTop: 1, minWidth: 268}}>
        <InputLabel id="enfermaria_id">Enfermaria</InputLabel>
        <Select
          id="enfermaria"
          label="enfermaria"
          type="text"
          variant="outlined"

          margin="normal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Enf01</MenuItem>
          <MenuItem value={20}>Enf02</MenuItem>
          <MenuItem value={30}>Enf03</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{m: 1, minWidth: 268}}>
        <InputLabel id="apartamento_id">Apartamento</InputLabel>
        <Select
          id="apartamento"
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
