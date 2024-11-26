describe('Test de Aplicación', () => {
  it('debería cargar la página principal', () => {
    cy.visit('http://127.0.0.1:4200/');
    cy.contains('Bienvenido'); // Ajusta este texto según lo que esperes en tu página
  });
});
