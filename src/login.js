
function login(username, password) {
  const users = {
    joao: 'senha123',
  };

  if (!username || !password) {
    return 'Campo de usuário e senha são obrigatórios.';
  }

  if (users[username] === password) {
    return `Bem-vindo, ${username}!`;
  } else {
    return 'Usuário ou senha incorretos.';
  }
}

module.exports = login;
