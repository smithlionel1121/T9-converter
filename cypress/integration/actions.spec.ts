describe('Unit test ', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept('/api/converter').as('converter');
  });

  it('user can retrieve suggestions from numbers inputted from on screen keypad ', () => {
    cy.findByRole('button', { name: /^2/i }).click();
    cy.findByRole('button', { name: /^3/i }).click();

    cy.wait('@converter');

    cy.findByTestId('inputDisplay').should(($input) => {
      const val = $input.val();
      expect(val).to.match(/[2abc][3def]/i);
    });

    cy.findByTestId('suggestionsList')
      .find('li')
      .should('have.lengthOf.above', 0);
  });

  it('user can retrieve suggestions from numbers typed', () => {
    cy.findByTestId('inputDisplay')
      .trigger('keydown', { key: '2' })
      .trigger('keydown', { key: '3' });

    cy.wait('@converter');

    cy.findByTestId('inputDisplay').should(($input) => {
      const val = $input.val();
      expect(val).to.match(/[2abc][3def]/i);
    });

    cy.findByTestId('suggestionsList')
      .find('li')
      .should('have.lengthOf.above', 0);
  });

  it('user cannot type in letters to retrieve suggestions', () => {
    cy.findByTestId('inputDisplay')
      .trigger('keydown', { key: 'a' })
      .trigger('keydown', { key: 'c' });

    cy.wait('@converter');

    cy.findByTestId('inputDisplay').should(($input) => {
      const val = $input.val();
      expect(val).not.to.match(/[2abc][3def]/i);
    });

    cy.findByTestId('suggestionsList').find('li').should('have.lengthOf', 0);
  });
});

export {};
