import applyform from "../support/Pageobjects.js/ApplyNowPOM";

const call1 = new applyform();

describe('Applyform', function() {
    beforeEach(function (){
      cy.fixture(Cypress.env('fixtureFile')).then((data) => {
        this.data = data;
        cy.visit(Cypress.env('adminUrl'), {failOnStatusCode: false});
        cy.viewport(1366, 768);
      })
    })
    it('AF', function() {
      call1.SC(this.data);
      
    })
  
  })