function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

function validar(senha) {
  if (senha.length < 4 || senha.length > 26) {
    return { valido: false, texto: "Senha deve ter entre 4 e 25 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export {validarCPF, validar}