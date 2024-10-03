function cadastrarUsuario(nome, senha, email) {
  if (!nome) {
    return 'O nome de usuário é obrigatório';
  }
  if (!senha) {
    return 'A senha é obrigatória';
  }
  if (senha.length < 6) {
    return 'A senha deve ter pelo menos 6 caracteres';
  }
  if (!email) {
    return 'O email é obrigatório';
  }
  return `Usuário ${nome} cadastrado com sucesso!`;
}

module.exports = cadastrarUsuario;
