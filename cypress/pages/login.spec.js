/// <reference types="cypress" />

class Login {

   elements = {
      visitSite: () => cy.visit("/"),
      checkLocation: () => cy.location("pathname"),
      logout: () => cy.get(".ico-logout"),
      login: () => cy.get('.ico-login'),
      inputEmail: () => cy.get('#Email'),
      inputPassword: () => cy.get('#Password'),
      EnableRememberMe: () => cy.get("#RememberMe"),
      clickLogin: () => cy.get(".button-1.login-button"),

      checkLoginErr: () => cy.get(".message-error"),
   }

   visitInTheSite() {
      this.elements.visitSite();
   }

   checkLocation(path) {
      this.elements.checkLocation().should('equal', path);
   }

   navigateToTheLoginPage() {
      if (this.elements.login) {
       this.elements.login().click();  
      }
      else if(this.elements.logout) {
         this.elements.logout().click();
      }
   }

   typeEmail(email) {
      this.elements.inputEmail().clear().type(email);
   }

   typePassword(password) {
      this.elements.inputPassword().clear().type(password);
   }

   EnableRememberMeRadioButton() {
      this.elements.EnableRememberMe().click();
   }

   clickLogin() {
      this.elements.clickLogin().click();
   }

   checkLoginError(err) {
      this.elements.checkLoginErr().should("have.text", err);
   }
   
}

module.exports = new Login();