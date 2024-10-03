const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.username = '';
    this.password = '';
    this.loginMessage = '';
  }
}

setWorldConstructor(CustomWorld);
