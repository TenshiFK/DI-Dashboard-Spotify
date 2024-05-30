Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:3000/');

  cy.wait(2000);

  cy.get('a#test-button button').first().click();

  cy.wait(5000);

  cy.origin('https://accounts.spotify.com/', () => {
    cy.get('input').eq(0).type('tenshi.yuki15@gmail.com');
    cy.get('input').eq(1).type('Teste14081408');

    cy.wait(3000);

    cy.get('button').eq(5).click();

    cy.wait(3000);

  })

  cy.origin('https://challenge.spotify.com/', () => {
    cy.get('button').eq(0).click();
  })

  cy.origin('https://accounts.spotify.com/', () => {
    cy.get('button').eq(0).click();
  })

});

Cypress.Commands.add('logout', () => {

    cy.get('button#logout').click();

});

Cypress.Commands.add('loginErrado', () => {
  cy.visit('http://localhost:3000/');

  cy.wait(2000);

  cy.get('a#test-button button').first().click();

  cy.wait(5000);

  cy.origin('https://accounts.spotify.com/', () => {
    cy.get('input').eq(0).type('testeTeste@gmail.com');
    cy.get('input').eq(1).type('12345678');

    cy.wait(3000);

    cy.get('button').eq(5).click();

    cy.wait(3000);

  })

});
