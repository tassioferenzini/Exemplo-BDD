const { Given, When, Then } = require('@cucumber/cucumber');

let expect;
(async () => {
  expect = (await import('chai')).expect;
})();

const login = require('../../src/login');

let username;
let password;
let loginMessage;

Given('que o usuário {string} está registrado com a senha {string}', function (user, pass) {
  username = user;
  password = pass;
});

When('eu tento fazer login com o usuário {string} e a senha {string}', function (user, pass) {
  loginMessage = login(user, pass);
});

/*When('eu tento fazer login com o usuário {string}', function (user) {
  username = user; // Define o usuário que está tentando fazer login
});

When('a senha {string}', function (pass) {
  password = pass; // Define a senha usada para tentar o login
  // Executa o login após ter definido o usuário e a senha
  loginMessage = login(username, password);
});
*/

Then('o login deve ser bem-sucedido e eu devo ver a mensagem {string}', async function (expectedMessage) {
  await new Promise(r => setTimeout(r, 0)); // Garantir que o `expect` foi carregado
  expect(loginMessage).to.equal(expectedMessage);
});

Then('o login deve falhar e eu devo ver a mensagem {string}', async function (expectedMessage) {
  await new Promise(r => setTimeout(r, 0)); // Garantir que o `expect` foi carregado
  expect(loginMessage).to.equal(expectedMessage);
});
