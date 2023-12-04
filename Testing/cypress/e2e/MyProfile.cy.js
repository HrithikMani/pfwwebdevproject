// cypress/integration/listJobs.spec.js

describe('ListJobs Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/listjobs'); 
  });

  it('should display job listings', () => {
    cy.get('.jobbox').should('have.length.greaterThan', 0);
  });

  it('should navigate to My Applications modal', () => {
    cy.get('#MyAppplications').should('not.be.visible');
    cy.contains('My Applications').click();
    cy.get('#MyAppplications').should('be.visible');
  });

  // it('should navigate to My Notifications modal', () => {
  //   cy.get('#MyNotifications').should('not.be.visible');
  //   cy.contains('My Notifications').click();
  //   cy.get('#MyNotifications').should('be.visible');
  // });

  // it('should navigate to My Profile page', () => {
  //   cy.get('a[href="/myprofile"]').click();
  //   cy.url().should('include', '/myprofile');
  //   // Add more assertions specific to the My Profile page if needed
  // });

  it('should navigate to the login page when clicking on Logout', () => {
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');
    // Add more assertions specific to the login page if needed
  });

  it('should apply for a job', () => {
    // Assuming there is at least one job listing
    cy.get('.jobbox').first().within(() => {
      cy.get('button.btnApply').click();
    });
    cy.url().should('include', '/job/');
    // Add more assertions specific to the job application page if needed
  });

  it('should review application from My Applications modal', () => {
    // Assuming there is at least one application in My Applications modal
    cy.contains('My Applications').click();
    cy.get('#MyAppplications').should('be.visible');
    cy.get('.btn-warning').first().click();
    // Add more assertions specific to the application review page if needed
  });

  // Add more test cases based on your component's functionality
});
