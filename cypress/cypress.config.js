// cypress.config.js
module.exports = {
    e2e: {
      baseUrl: 'http://frontend:4200',  // Asegúrate de que esté apuntando a tu frontend
      specPattern: 'e2e/*.cy.js',  // Cambia el patrón a tus pruebas
      supportFile: false,  // Desactiva el archivo de soporte
      },
  };
  
