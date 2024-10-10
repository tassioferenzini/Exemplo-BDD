# language: pt
Funcionalidade: Troca de senha

  Como um usuário logado
  Eu quero ser capaz de trocar a minha senha
  Para que eu possa aumentar a segurança da minha conta

  Cenário: Usuário tenta trocar a senha com várias entradas válidas e inválidas
    Dado que o usuário está logado
    E que a senha atual é "Senha@123"
    Quando o usuário tenta trocar a senha com os seguintes dados:
      | novaSenha       | resultadoEsperado | mensagemEsperada                              |
      | NovaSenha@456   | true              | Senha alterada com sucesso!                   |
      | Senha@123       | false             | A nova senha não pode ser igual à senha atual.|
      | Nova123         | false             | A senha deve ter no mínimo 8 caracteres.      |
      | 12345678        | false             | A senha deve conter letras e números.         |
    Então as validações de troca de senha devem ser processadas corretamente
