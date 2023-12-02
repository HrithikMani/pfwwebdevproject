// cypress/integration/home.spec.js

describe('Home test', () => {
  it('should display the Talent Acquisition Hub homepage', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');

    // Assert that the Talent Acquisition Hub logo is displayed
    cy.get('.gettingStartedLogo h1').should('have.text', 'Talent Acquisition Hub');

    // Click on the "Are you a job seeker?" button and assert navigation
    cy.get('.get-started-button:contains("Are you a job seeker ?")').click();
    cy.url().should('include', '/Login');

    // Go back to the home page
    cy.go('back');

    // Click on the "Are you a recruiter?" button and assert navigation
    cy.get('.get-started-button:contains("Are you a recruiter?")').click();
    cy.url().should('include', '/Login');
  });
});
