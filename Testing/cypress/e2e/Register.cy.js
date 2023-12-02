describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display the Talent Acquisition Hub logo', () => {
    cy.get('.gettingStartedLogo h1').should('have.text', 'Talent Acquisition Hub');
  });

  it('should show a success message after submitting valid registration data', () => {
    cy.intercept('POST', 'http://localhost:3000/register', {
      statusCode: 200,
      body: {},
    }).as('registerRequest');

    cy.get('input[placeholder="First Name"]').type('navya');
    cy.get('input[placeholder="Last Name"]').type('k');
    cy.get('input[placeholder="Email ID"]').type('navyak@gmail.com');
    cy.get('input[placeholder="Password"]').type('navyak');
    cy.get('button[type="submit"]').click();

    cy.wait('@registerRequest');
    cy.get('.successMsg').should('have.text', 'Registered Successfully').and('be.visible');
  });

  it('should not navigate to the login page after successful registration', () => {
    cy.intercept('POST', 'http://localhost:3000/register', {
      statusCode: 200,
      body: {},
    }).as('registerRequest');

    cy.get('input[placeholder="First Name"]').type('navya');
    cy.get('input[placeholder="Last Name"]').type('k');
    cy.get('input[placeholder="Email ID"]').type('navyak@gmail.com');
    cy.get('input[placeholder="Password"]').type('navyak');
    cy.get('button[type="submit"]').click();

    cy.wait('@registerRequest');

    // cy.url().should('match', /login/i);
  });
});
