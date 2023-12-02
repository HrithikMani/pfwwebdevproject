// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login'); // Update with your actual login page URL
  });
 
  it('should display the Talent Acquisition Hub logo', () => {
    cy.get('.gettingStartedLogo h1').should('have.text', 'Talent Acquisition Hub');
  });
 
  it('should show an error message for invalid email', () => {
    cy.get('input[type="text"]').type('invalidemail');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('.cyan-button').click();
    cy.get('.errorMsg').should('have.text', 'Invalid email');
  });
 
  it('should show an error message for missing email', () => {
    cy.get('input[type="password"]').type('validpassword');
    cy.get('.cyan-button').click();
    cy.get('.errorMsg').should('have.text', 'Please enter email');
  });
 
  it('should show an error message for missing password', () => {
    cy.get('input[type="text"]').type('validemail@example.com');
    cy.get('.cyan-button').click();
    cy.get('.errorMsg').should('have.text', 'Please enter password');
  });
 
  it('should show an error message for invalid credentials', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/login',
      status: 200,
      response: { res: 0 },
    }).as('loginRequest');
 
    cy.get('input[type="text"]').type('validemail@example.com');
    cy.get('input[type="password"]').type('invalidpassword');
    cy.get('.cyan-button').click();
 
    cy.wait('@loginRequest');
    cy.get('.errorMsg').should('have.text', 'Invalid Credentials');
  });
 
  it('should navigate to the registration page', () => {
    cy.get('.white-link-dec').click();
    cy.url().should('include', '/register');
  });
 
  it('should navigate to the list jobs page after successful login', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/login',
      status: 200,
      response: { res: 1 },
    }).as('loginRequest');
 
    cy.get('input[type="text"]').type('validemail@example.com');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('.cyan-button').click();
 
    cy.wait('@loginRequest');
    cy.url().should('include', '/listjobs');
  });
});
 