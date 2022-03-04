/// <reference types="cypress" />

import Login from '../../../pages/login.spec.js'

//test data
const Email = 'test@example.net';
const Password = 'qwerty123456';
const invalidEmails = [
   'testexample.net', //@ isn't type
   'test@example..net', //double dot
   'test@examplenet', //without dot
   'test@example', //incomplete domain
   'test@.net', //incomplete domain
   'test@', //without domain
   'fb@fb.com', //there isn't such registered email
]
const invalidPasswords = [
   '123', //must have at least 6 characters
   'zxcvbnm' // != Password
];

describe("login with invalid data", () => {

   before(() => {
      Login.visitInTheSite();
      Login.checkLocation('/');
      Login.navigateToTheLoginPage();
      Login.checkLocation('/login');
   });

   it("login with invalid password", () => {
      Login.typeEmail(Email);
      Login.EnableRememberMeRadioButton();

      invalidPasswords.forEach((val) => {
         Login.typePassword(val);
         Login.clickLogin();
         Login.checkLoginError('Login was unsuccessful. Please correct the errors and try again.No customer account found\n');
      });
   });

   it("login with invalid Email", () => {
      Login.typePassword(Password);
      Login.EnableRememberMeRadioButton();

      invalidEmails.forEach((val) => {
         Login.typeEmail(val);
         Login.clickLogin();
         Login.checkLoginError('Login was unsuccessful. Please correct the errors and try again.No customer account found\n');
      });
   });
});