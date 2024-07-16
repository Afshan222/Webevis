import ScheduleCAll from "../support/Pageobjects.js/ScheduelcallPOM"
const call1 = new ScheduleCAll();

describe('SC', function() {
  beforeEach(function (){
    cy.fixture(Cypress.env('fixtureFile')).then((data) => {
      this.data = data;
      cy.visit(Cypress.env('adminUrl'), {failOnStatusCode: false});
      cy.viewport(1366, 768);
    })
  })
  it('SC', function() {
    call1.SC(this.data);
    
  })

})