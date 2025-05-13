const { Given, When, Then } = require('@cucumber/cucumber');

let expect;
(async () => {
  expect = (await import('chai')).expect;
})();

const cadastrarUsuario = require('../../src/cadastro');

let dadosDeCadastro;
let mensagensDeErro;

Given('que eu estou na página de cadastro', function () {
  dadosDeCadastro = [];
  mensagensDeErro = [];
});

When('eu insiro os seguintes dados:', function (dataTable) {
  dadosDeCadastro = dataTable.hashes();
});

Then('o cadastro deve ser realizado com sucesso para cada um dos usuários', function () {
  dadosDeCadastro.forEach((usuario) => {
    const mensagem = cadastrarUsuario(usuario.nome, usuario.senha, usuario.email);
    expect(mensagem).to.equal(`Usuário ${usuario.nome} cadastrado com sucesso!`);
  });
});

Then('o cadastro não deve ser realizado e eu devo ver as mensagens de erro correspondentes:', function (dataTable) {
  const mensagensEsperadas = dataTable.hashes();
  
  dadosDeCadastro.forEach((usuario, index) => {
    const mensagem = cadastrarUsuario(usuario.nome, usuario.senha, usuario.email);
    mensagensDeErro.push({ nome: usuario.nome, mensagemDeErro: mensagem });
  });

  mensagensEsperadas.forEach((mensagemEsperada) => {
    const erroEncontrado = mensagensDeErro.find(
      (erro) => erro.nome === mensagemEsperada.nome && erro.mensagemDeErro === mensagemEsperada.mensagem
    );
    expect(erroEncontrado).to.not.be.undefined;
  });
});
