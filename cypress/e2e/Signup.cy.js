import signUpPage from "../support/Pageobjects.js/SignUpPOM"

const signUpPage1 = new signUpPage();

describe('Webevis SignUp', function() {
  beforeEach(function (){
    
    cy.fixture(Cypress.env('fixtureFile')).then((data) => {
      this.data = data;
      cy.visit('https://webevis.com/') ,  { failOnStatusCode: false }
      //cy.viewport(1366, 768);
      
    })
  })
  it('SignUp', function() {
    signUpPage1.HiringWithValidData1(this.data);
    
  })

})