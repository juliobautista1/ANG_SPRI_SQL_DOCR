describe('Test de Aplicación', () => {
  it('debería cargar la página principal', () => {
    cy.visit('/');
    cy.contains('Bienvenido'); // Ajusta este texto según lo que esperes en tu página
  });
});
