import React, { useState, useContext } from 'react';
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material';
import ValidacoesCadastro from 'contexts/ValidacoesCadastro';
import useErros from 'hooks/useErros';
// import { DateTimePicker } from '@mui/x-date-pickers';
function DadosVisitantes({ aoEnviar }) {
  const [paciente, setPaciente] = useState("");
  const [visitante, setVisitante] = useState("");
  const [cpf, setCpf] = useState("");
  // const [leito, setLeito] = useState("");
  const [diurno, setDiurno] = useState(false);
  const [noturno, setNoturno] = useState(false);
  const [acompanhante, setAcompanhante] = useState(false);

  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

 

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ paciente, visitante, cpf, /*leito ,*/ diurno, noturno, acompanhante })
        }

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
        onBlur={validarCampos}
        erros={!erros.paciente.valido}
        helperText={erros.paciente.texto}
        id='Paciente'
        name='paciente'
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
        onBlur={validarCampos}
        erros={!erros.visitante.valido}
        helperText={erros.visitante.texto}
        id='Visitante'
        name='visitante'
        label='Visitante'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      {/* CPF COM VALIDAÇÃO */}
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={validarCampos}

        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id='CPF'
        name='cpf'
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
        <Button type='submit' variant='contained' color='primary'>Proximo</Button>
      </FormControl>


    </form>
  )
}
export default DadosVisitantes