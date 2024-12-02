describe('Test de Aplicación', () => {
  it('debería cargar la página principal', () => {
    cy.visit('http://frontend:4200/');
    cy.contains('Bienvaenido'); // Ajusta este texto según lo que esperes en tu página
  });
});
