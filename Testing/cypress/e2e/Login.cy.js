describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login'); 
  });

  it('should navigate to the list jobs page after successful login', () => {
    cy.intercept('POST', 'http://localhost:3000/login', {
      statusCode: 200,
      body: { res: 1 },
    }).as('loginRequest');

    cy.get('input[type="text"]').type('abc@gmail.com');
    cy.get('input[type="password"]').type('abc');
    cy.get('.cyan-button').click();

    cy.wait('@loginRequest');
    cy.url().should('include', '/listjobs');
  });

  it('should show an error message for invalid credentials', () => {
    cy.intercept('POST', 'http://localhost:3000/login', {
      statusCode: 200,
      body: { res: 0 },
    }).as('loginRequest');

    cy.get('input[type="text"]').type('invalidemail@example.com');
    cy.get('input[type="password"]').type('invalidpassword');
    cy.get('.cyan-button').click();

    cy.wait('@loginRequest');
    cy.get('.errorMsg').should('have.text', 'Invalid Credentials');
  });
});
