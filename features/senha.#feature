# language: pt

Funcionalidade: 1 - Troca de senha

  Como um usuário logado
  Eu quero ser capaz de trocar a minha senha
  Para que eu possa aumentar a segurança da minha conta

  Cenário: 1.1 - Usuário troca a senha com sucesso
    Dado que o usuário está logado
    E que a senha atual é "Senha@123"
    Quando o usuário tenta trocar a senha para "NovaSenha456"
    Então a senha deve ser atualizada com sucesso
    E o usuário deve ver a mensagem de sucesso "Senha alterada com sucesso!"

  Cenário: Usuário tenta trocar a senha para uma senha igual à atual
    Dado que o usuário está logado
    E que a senha atual é "Senha@123"
    Quando o usuário tenta trocar a senha para "Senha@123"
    Então o sistema deve exibir a mensagem de erro "A nova senha não pode ser igual à senha atual."

  Cenário: Usuário tenta trocar a senha para uma senha menor que 8 caracteres
    Dado que o usuário está logado
    E que a senha atual é "Senha@123"
    Quando o usuário tenta trocar a senha para "Nova123"
    Então o sistema deve exibir a mensagem de erro "A senha deve ter no mínimo 8 caracteres."

  Cenário: Usuário tenta trocar a senha sem letras e números
    Dado que o usuário está logado
    E que a senha atual é "Senha@123"
    Quando o usuário tenta trocar a senha para "12345678"
    Então o sistema deve exibir a mensagem de erro "A senha deve conter letras e números."
