# language: pt

Funcionalidade: Login de usuário
  Para garantir que somente usuários registrados possam acessar o sistema
  Como um usuário registrado
  Eu quero ser capaz de fazer login usando minhas credenciais

  Cenário: Login bem-sucedido
    Dado que o usuário "joao" está registrado com a senha "senha123"
    Quando eu tento fazer login com o usuário "joao" e a senha "senha123"
    #Quando eu tento fazer login com o usuário "joao" 
    #E a senha "senha123"
    Então o login deve ser bem-sucedido e eu devo ver a mensagem "Bem-vindo, joao!"

  Cenário: Login com senha incorreta
    Dado que o usuário "joao" está registrado com a senha "senha123"
    Quando eu tento fazer login com o usuário "joao" e a senha "senhaErrada"
    Então o login deve falhar e eu devo ver a mensagem "Usuário ou senha incorretos."
