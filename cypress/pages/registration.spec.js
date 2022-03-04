/// <reference types="cypress" />

class Registration {

   elements = {
      visitSite: () => cy.visit("/"),
      checkLocation: () => cy.location("pathname"),
      navigateRegistrationPage: () => cy.get('.ico-register'),
      selectMaleGender: () => cy.get('#gender-male'),
      inputfirstName: () => cy.get("#FirstName"),
      inputLastName: () => cy.get("#LastName"),
      setDayOfBirth: () => cy.get('[name="DateOfBirthDay"]'),
      setMonthOfBirth: () => cy.get('[name="DateOfBirthMonth"]'),
      setYearOfBirth: () => cy.get('[name="DateOfBirthYear"]'),
      inputEmail: () => cy.get("#Email"),
      inputCompanyName: () => cy.get("#Company"),
      DisableNewsletter: () => cy.get("div.inputs > #Newsletter"),
      inputPassword: () => cy.get("#Password"),
      inputConfirmPassword: () => cy.get("#ConfirmPassword"),
      clickRegister: () => cy.get("#register-button"),
      clearName: () => cy.get('#FirstName'),
      SuccessfulResultMessage: () => cy.get('div.result'),

      checkEmailErr: () => cy.get("#Email-error"),
      checkPasswordErr: () => cy.get("#Password-error"),
      checkConfirmPasswordErr: () => cy.get("#ConfirmPassword-error"),
      checkNameErr: () => cy.get('#FirstName-error'),
      checkDayErr: () => cy.get('#Day-and-month-error')
   }


   visitInTheSite() {
      this.elements.visitSite();
   }

   checkLocation(path) {
      this.elements.checkLocation().should('equal', path);
   }

   navigateToTheRegistrationPage() {
      this.elements.navigateRegistrationPage().click();
   }

   selectMaleGender() {
      this.elements.selectMaleGender().click();
   }

   typefirstName(firstName) {
      this.elements.inputfirstName().clear().type(firstName);
   }

   typeLastName(lastName) {
      this.elements.inputLastName().clear().type(lastName);
   }

   setDayOfBirth(day) {
      this.elements.setDayOfBirth().select(day);
   }

   setMonthOfBirth(month) {
      this.elements.setMonthOfBirth().select(month);
   }

   setYearOfBirth(year) {
      this.elements.setYearOfBirth().select(year);
   }

   typeEmail(email) {
      this.elements.inputEmail().clear().type(email);
   }

   typeCompanyName(companyName) {
      this.elements.inputCompanyName().clear().type(companyName);
   }


   DisableNewsletter() {
      this.elements.DisableNewsletter().click();
   }

   typePassword(password) {
      this.elements.inputPassword().clear().type(password);
   }

   typeConfirmPassword(password) {
      this.elements.inputConfirmPassword().clear().type(password);
   }

   clickRegisterButton() {
      this.elements.clickRegister().click();
   }

   clearFirstNameField() {
      this.elements.clearName().clear();
   }

   checkSuccessfulMessage(mess) {
      this.elements.SuccessfulResultMessage().should('have.text', mess);
   }

   checkEmailError(err) {
      this.elements.checkEmailErr().should('have.text', err);
   }

   checkPasswordError(err) {
      this.elements.checkPasswordErr().should('have.text', err);
   }

   checkConfirmPasswordError(err) {
      this.elements.checkConfirmPasswordErr().should('have.text', err);
   }

   checkFirstNameError(err) {
      this.elements.checkNameErr().should('have.text', err);
   }

   checkDay_MonthErr(err) {
      this.elements.checkDayErr().should('have.text', err);
   }
}

module.exports = new Registration();