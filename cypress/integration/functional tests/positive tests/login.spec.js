/// <reference types="cypress" />

import Login from '../../../pages/login.spec.js'

//test data
const password = 'qwerty123456';
const email = 'test2@example.net';

describe("Login with valid data", () => {

   before(() => {
      Login.visitInTheSite();
      Login.checkLocation('/');
      Login.navigateToTheLoginPage();
      Login.checkLocation('/login');
   });

   it("Fill all fields", () => {
      Login.typeEmail(email);
      Login.typePassword(password);
      Login.clickLogin();
      Login.checkLocation('/');
   });

});