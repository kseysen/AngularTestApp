describe('My First Test', function() {
    it('Visits the testApp Angular 5', function() {
      cy.visit('http://localhost:4200/#');

      cy.contains('Test Cypress Button').click();
      cy.get('#resultClick').contains('test click');

      cy.get('#exampleInputEmail1').type('email').should('have.value', 'email');
      cy.get('#resultEmail').contains('email');
    })
  })