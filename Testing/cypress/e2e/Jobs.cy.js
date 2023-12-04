// describe('Job Page', () => {
//   const jobId = '10009'; 

//   it('should display job details and apply button', () => {
//     cy.visit(`http://localhost:5173/job/${jobId}`);
//     cy.get('.jobDescHeader h1').should('contain', 'Software Engineer');
//     cy.get('.jobDescSection h3').should('contain', 'Job Description');
//     cy.get('.jobdescapplybtnouter button').should('contain', 'Apply');
//   });

//   it('should navigate to the list of jobs when clicking the Back button', () => {
//     cy.visit(`http://localhost:5173/job/${jobId}`);
//     cy.get('.sidebar a').contains('Back').click();
//     cy.url().should('include', '/listjobs');
//   });

//   it('should navigate to the login page when clicking the Logout button', () => {
//     cy.visit(`http://localhost:5173/job/${jobId}`);
//     cy.get('.sidebar a').contains('Logout').click();
//     cy.url().should('include', '/login');
//   });
// });


describe("Job Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/job/14");
  });
  it("should display job location, ID, and salary", () => {
  });
  it("should display apply button", () => {
  });
  it("should navigate to the list jobs page on clicking 'Back'", () => {
  });
  it("should navigate to the login page on clicking 'Logout'", () => {
  });
});
