describe('Home test', () => {
  it('should display the Talent Acquisition Hub homepage', () => {
    
    cy.visit('http://localhost:5173/');

   
    cy.get('.gettingStartedLogo h1').should('have.text', 'Talent Acquisition Hub');

    cy.get('.get-started-button:contains("Are you a job seeker ?")').click();
    cy.url().should('include', '/Login');
    cy.go('back');
    cy.get('.get-started-button:contains("Are you a recruiter?")').click();
    cy.url().should('include', '/Login');
  });
});
