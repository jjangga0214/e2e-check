describe('Github', () => {
  beforeEach(() => {
    cy.visit('https://github.com');
  });

  it('check', () => {
    cy.title().should('include', 'leading software development platform');
    cy.get('.js-signup-form button').should('eq', 'Sign up for GitHub');
  });
});
