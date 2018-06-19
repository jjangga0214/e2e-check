describe('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/ncr');
  });

  it('check', () => {
    cy.title().should('eq', 'Google');
    cy.get('input[name="btnK"]').contains('Google Search');
  });

  it('search', () => {
    cy.get('input[name="q"]').type('e2e-check');
    cy.get('input[name="btnK"]').click();
    cy.title().should('eq', 'e2e-check - Google Search');
  });
});
