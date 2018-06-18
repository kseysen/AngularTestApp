// you can have external state, and also require things!
const url = 'http://localhost:4200/';
 
given('I open MyApp page', () => {
  cy.visit(url)
})