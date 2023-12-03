// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
// cypress/integration/profile.spec.js
 
describe('Profile Page', () => {
  it('Should navigate to My Profile page', () => {
    cy.visit('http://localhost:5173/myprofile');
    cy.contains('h1', 'My Profile');
  });
 
  // it('Should navigate to Job Listings and apply for a job', () => {
  //   cy.visit('http://localhost:5173/listjobs');
  //   cy.get('.jobbox:first-child .btnApply').click();
  //   cy.contains('h5', 'Role :  Software Intern');
  //   cy.get('.btn.btn-success').click();
  //   // Add more assertions based on your application behavior
  // });
 
  // it('Should navigate to My Applications and review an application', () => {
  //   cy.visit('http://localhost:5173/myapplications');
  //   cy.get('.modal-body.jobouteroverflow .btn-warning:first-child').click();
  //   // Add assertions based on your application behavior
  // });
 
  it('Should navigate to My Notifications', () => {
    cy.visit('http://localhost:5173/mynotifications');
   
  });
 
});