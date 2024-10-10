class Senha {
    constructor() {
      this.password = "Senha@123"; // Senha atual simulada
    }
  
    validarNovaSenha(novaSenha) {
      // A nova senha não pode ser igual à atual
      if (novaSenha === this.password ) {
        return { sucesso: false, mensagem: "A nova senha não pode ser igual à senha atual." };
      }
  
      // A nova senha deve ter no mínimo 8 caracteres
      if (novaSenha.length < 8) {
        return { sucesso: false, mensagem: "A senha deve ter no mínimo 8 caracteres." };
      }
  
      // A senha precisa conter letras e números
      const regexLetrasENumeros = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!regexLetrasENumeros.test(novaSenha)) {
        return { sucesso: false, mensagem: "A senha deve conter letras e números." };
      }
  
      // Caso a validação passe, a senha pode ser alterada
      this.password = novaSenha; // Atualiza a senha
      return { sucesso: true, mensagem: "Senha alterada com sucesso!" }; // Retorna sucesso
    }
  }
  
  module.exports = Senha;
  