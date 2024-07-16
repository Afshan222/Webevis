class ScheduleCAll
{
Call(){
    return ('.Buttonstyles__PrimaryButton-sc-1nw82x4-1.dWKlfe')}
Date(){
    return ('.rdrDayNumber')}
Time(){
    return ('.time-slot')}
Next(){
    return ('.Buttonstyles__PrimaryButton-sc-1nw82x4-1.ieKBIl')}
Name(){
    return ('#name')}
email(){
    return ('#email')}
Guestemail(){
    return ('.email-input-container')}
Otherdetail(){
    return ('#description')}
LetsEmail(){
    return ('.Buttonstyles__PrimaryButton-sc-1nw82x4-1.ieKBIl')}
toast(){
    return ('.Toastifystyles__ToastText-sc-kqy5ws-3.iHHJue')}
SC(data)
{
    for (var e = 0; e < data.SchduleCall.length; e++) {
        var obj = data.SchduleCall[e];}
cy.wait(8000);
cy.get('.eUkWME').click();
cy.scrollTo('bottom');
cy.get(this.Call()).click();
cy.get(this.Date()).eq(22).click();
cy.get(this.Time()).eq(40).click();
cy.get(this.Next()).click();
cy.get(this.Name()).type(obj.Name).click();
cy.get(this.email()).type(obj.Email).click();
cy.get(this.Guestemail()).type(obj.GuestEmail).click();
cy.get(this.Otherdetail()).type(obj.Otherdetails);
cy.get(this.LetsEmail()).click()
cy.get(this.toast()).should('contain', 'Thank you for considering us for your project. Our solution experts will get back to you shortly.')
}

} export default ScheduleCAll