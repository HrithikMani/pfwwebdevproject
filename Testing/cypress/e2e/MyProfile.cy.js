// cypress/integration/myprofile.spec.js

describe('MyProfile Page', () => {
  it('should load My Profile page and check fields', () => {
    // Visit the My Profile page
    cy.visit('http://localhost:5173/myprofile');

    // Check if the header contains 'My Profile'
    cy.get('.jobDescHeader h1').should('contain', 'My Profile');

    // Check if the input fields are present
    cy.get('.jobUpdateOuter input[placeholder="First Name"]').should('exist');
    cy.get('.jobUpdateOuter input[placeholder="Last Name"]').should('exist');
    cy.get('.jobUpdateOuter input[placeholder="Email ID"]').should('exist');
    cy.get('.jobUpdateOuter input[placeholder="Password"]').should('exist');
  });

  it('should go back to the previous page when clicking the Back button', () => {
    // Click the Back button
    cy.get('.sidebar a').contains('Back').click();

    // Assuming the page navigates to the list of jobs
    cy.url().should('include', '/listjobs');
  });
});
