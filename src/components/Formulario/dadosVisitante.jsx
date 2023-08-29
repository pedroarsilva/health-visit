import React, { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers';
function DadosVisitantes({ aoEnviar, validarCPF }) {
  const [paciente, setPaciente] = useState("");
  const [visitante, setVisitante] = useState("");
  const [cpf, setCpf] = useState("");
  // const [leito, setLeito] = useState("");
  const [diurno, setDiurno] = useState(false);
  const [noturno, setNoturno] = useState(false);
  const [acompanhante, setAcompanhante] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ paciente, visitante, cpf, /*leito ,*/ diurno, noturno, acompanhante })
        setPaciente('');
        setVisitante('');
        setCpf('');
        // setLeito('');
        setCpf('');
        setDiurno('');
        setNoturno('');
        setAcompanhante('');
      }}
    >
      {/* <DateTimePicker label="readOnly" readOnly /> */}
      <TextField
        value={paciente}
        onChange={(event) => {
          setPaciente(event.target.value);
        }}
        id='Paciente'
        label='Paciente'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        value={visitante}
        onChange={(event) => {
          setVisitante(event.target.value);
        }}
        id='Visitante'
        label='Visitante'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({ cpf: ehValido })
        }}

        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id='CPF'
        label='CPF'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      {/* <TextField
        value={leito}
        onChange={(event) => {
          setLeito(event.target.value)
        }}
        id='Leito'
        label='Leito'
        variant='outlined'
        fullWidth
        margin='normal'
      /> */}


      <FormControl className='form__control'>
        <FormLabel>O visitante será? </FormLabel>
        <FormGroup defaultChecked >
          <FormControlLabel control={
            <Switch
              checked={diurno}
              onChange={(event) => {
                setDiurno(event.target.checked)
              }}
              name='diurno'
            // defaultChecked={diurno}
            />
          }
            label='Diurno'
          />

          <FormControlLabel control={
            <Switch
              checked={noturno}
              onChange={(event) => {
                setNoturno(event.target.checked)
              }}
              name='noturno'
            />
          }
            label='Noturno'
          />
          <FormLabel>ou permanecerá como:</FormLabel>

          <FormControlLabel control={
            <Switch
              checked={acompanhante}
              onChange={(event) => {
                setAcompanhante(event.target.checked)
              }}
              name='acompanhante'
            />
          }
            label='Acompanhante'
          />

        </FormGroup>
        <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
      </FormControl>


    </form>
  )
}
export default DadosVisitantes