describe('Home test', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
 
    it('should display the Talent Acquisition Hub logo', () => {
      cy.get('.gettingStartedLogo h1').should('have.text', 'Talent Acquisition Hub');
    });
 
    it('should navigate to the login page for job seekers', () => {
      cy.get('.get-started-button:contains("Are you a job seeker ?")').click();
      cy.url().should('include', '/Login');
    });
 
    it('should navigate to the login page for recruiters', () => {
      cy.get('.get-started-button:contains("Are you a recruiter?")').click();
      cy.url().should('include', '/Login');
    })
  })
})