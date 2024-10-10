const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const PasswordService = require('../../src/senha');

let passwordService;
let resultado;

Given('que o usuário está logado', function () {
  passwordService = new PasswordService();
});

Given('que a senha atual é {string}', function (senhaAtual) {
  // Validar se a senha atual está correta
  assert.strictEqual(passwordService.password, senhaAtual);
});

When('o usuário tenta trocar a senha para {string}', function (novaSenha) {
  // Chamando o método para validar e trocar a senha
  resultado = passwordService.validarNovaSenha(novaSenha);
});

Then('a senha deve ser atualizada com sucesso', function () {
  // Verificando se a senha foi atualizada com sucesso
  assert.strictEqual(resultado.sucesso, true);
});

Then('o usuário deve ver a mensagem de sucesso {string}', function (mensagemEsperada) {
  // Verificando se a mensagem de sucesso é a esperada
  assert.strictEqual(resultado.mensagem, mensagemEsperada);
});

Then('o sistema deve exibir a mensagem de erro {string}', function (mensagemErroEsperada) {
  // Verificando se a mensagem de erro é a esperada
  assert.strictEqual(resultado.mensagem, mensagemErroEsperada);
});
