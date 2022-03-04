/// <reference types="cypress" />

import Registration from '../../../pages/registration.spec.js'
import Function from '../../../functions/functions.js'

//test data
const invalidEmails = [
   'testexample.net', //@ isn't type
   'test@example..net', //double dot
   'test@examplenet', //without dot
   'test@example', //incomplete domain
   'test@.net', //incomplete domain
   'test@', //without domain
]
const invalidPassword = 'qwe'; //must have at least 6 characters

const Email = 'test@example.net';
const Password = 'qwerty123456';
const firstName = 'Joe';
const lastName = 'Kohler';
const companyName = 'Querty Ebert';

describe("Registration with invalid data", () => {

   before(() => {
      Registration.visitInTheSite();
      Registration.checkLocation('/');
      Registration.navigateToTheRegistrationPage();
      Registration.checkLocation('/register');
      Registration.selectMaleGender();
      Registration.typeLastName(lastName);
      Registration.setMonthOfBirth(Function.random(12, 1));
      Registration.setYearOfBirth(Function.random(2022, 1912));

   });

   it("Registration with invalid emails", () => {
      Registration.typefirstName(firstName);
      Registration.setDayOfBirth(Function.random(28, 1));
      Registration.typeCompanyName(companyName);
      Registration.DisableNewsletter();
      Registration.typePassword(Password);
      Registration.typeConfirmPassword(Password);

      invalidEmails.forEach((val) => {
         Registration.typeEmail(val);
         Registration.clickRegisterButton();
         Registration.checkEmailError('Wrong email');
      });
   });

   it("Registration with invalid passwords", () => {
      Registration.typefirstName(firstName);
      Registration.setDayOfBirth(Function.random(28, 1));
      Registration.typeEmail(Email);
      Registration.typeCompanyName(companyName);
      Registration.DisableNewsletter();
      Registration.typePassword(invalidPassword);
      Registration.typeConfirmPassword(invalidPassword);
      Registration.clickRegisterButton();
      Registration.checkPasswordError("Password must meet the following rules: must have at least 6 characters");
   });

   it("Registration without first name", () => {
      Registration.clearFirstNameField();
      Registration.setDayOfBirth(Function.random(28, 1));
      Registration.typeEmail(Email);
      Registration.typeCompanyName(companyName);
      Registration.DisableNewsletter();
      Registration.typePassword(Password);
      Registration.typeConfirmPassword(Password);
      Registration.clickRegisterButton();
      Registration.checkFirstNameError('First name is required.');
   });

   it("Registration on February 31", () => {
      Registration.setDayOfBirth('31');
      Registration.typefirstName(firstName);
      Registration.typeEmail(Email);
      Registration.typeCompanyName(companyName);
      Registration.DisableNewsletter();
      Registration.typePassword(Password);
      Registration.typeConfirmPassword(Password);
      Registration.clickRegisterButton();
      Registration.checkDay_MonthErr('Day or Month is invalid');
   });
});