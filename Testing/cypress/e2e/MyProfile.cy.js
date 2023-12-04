describe('ListJobs Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/listjobs');
    cy.wait(2000);
  });
 
  it('should display the job listings', () => {
    cy.get('.jobbox').should('have.length.greaterThan', 0);
  });
 
  it('should navigate to My Applications modal when clicked', () => {
    cy.get('[data-target="#MyAppplications"]').click();
    cy.get('.modal-title').should('contain.text', 'My Applications');
  });
 
  it('should navigate to My Notifications modal when clicked', () => {
    cy.get('[data-target="#MyNotifications"]').click();
    cy.get('.modal-title').should('contain.text', 'My Notifications');
  });
 
  it('should navigate to My Profile page when clicked', () => {
    cy.get('[href="/myprofile"]').click();
    cy.url().should('include', '/myprofile');
  });
 
  it('should navigate to Login page when Logout is clicked', () => {
    cy.get('[href="/login"]').click();
    cy.url().should('include', '/login');
  });
});