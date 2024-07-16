//const faker = require("faker");
class signUpPage {
    NAvigator(){
        return ('.Navbarstyles__BurgerMenu-sc-sfar2a-15.ioffnV')
    }
    Hireandexpert()
    {
        return ('.Buttonstyles__PrimaryButton-sc-1nw82x4-1.hXDIC')
      
    }
    GetName()
    {
     return ('.input-holder')
    }
    Getemail()
    {
        return ('.input-holder')
    }
    GetPhoneNumber()
    {
       return ('.input-holder')
    }
    GetcompanyName()
    {
        return ('.input-holder')
    }
    GetcompanyWebsite()
    {
       return (".input-holder")
    }
    SelectResource()
    {
        return ('.input-holder')
    }
    OtherDetail()
    {
        return ('.textarea')
    }
    CheckBox()
    {
         return ('.Navbarstyles__ButtonWrapper-sc-sfar2a-16 >.Modalstyle__StyledModal-sc-2m5xau-0 >.Modalstyle__ContentHolder-sc-2m5xau-1 >.DeveloperModalsstyles__ModalHolders-sc-1ailygx-0 > form >.check-box > label')
    }
    LetsMeet()
    {
        return ('.Buttonstyles__PrimaryButton-sc-1nw82x4-1.gbiSwz')
    }
HiringWithValidData1(data)
{
  for(var i=0; i<data.HiringWithValidData.length; i++ ){
    var obj = data.HiringWithValidData[i];
    //var userEmail = faker.internet.email();
  }
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.get(this.NAvigator()).click({ force: true });
  cy.get(this.Hireandexpert()).click();
  cy.get(this.GetName()).eq(6).should('be.visible').type(obj.Name);
  cy.get(this.Getemail()).eq(7).type(obj.Email).click();
  cy.get(this.GetPhoneNumber()).eq(8).type(obj.PhoneNumber).click();
  cy.get(this.GetcompanyName()).eq(9).type(obj.Companyname).click();
  cy.get(this.GetcompanyWebsite()).eq(10).type(obj.CompanyWebsite).click();
  cy.get(this.SelectResource()).eq(11).click().contains('React Js Developer').click();
  cy.get(this.OtherDetail()).eq(1).type(obj.Otherdetails).click();
  cy.wait(500);
  cy.get('.eUkWME').click();
  cy.wait(5000);
  cy.get('[for="termsCheckbox"]').eq(2).click({force: true});
  cy.get(this.LetsMeet()).eq(1).click();

}
} export default signUpPage                                                                                                