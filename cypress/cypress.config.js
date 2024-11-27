// cypress.config.js
module.exports = {
    e2e: {
      baseUrl: 'http://127.0.0.1:4200',  // Asegúrate de que esté apuntando a tu frontend
      specPattern: 'cypress/e2e/*.cy.js',  // Cambia el patrón a tus pruebas
      },
  };
  
