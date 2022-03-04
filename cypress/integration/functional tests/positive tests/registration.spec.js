/// <reference types="cypress" />

import Registration from '../../../pages/registration.spec.js'
import Function from '../../../functions/functions.js'

//test data
const password = 'qwerty123456';
const email = 'test2@example.net';
const firstName = 'Joe';
const lastName = 'Kohler';
const companyName = 'Querty Ebert';

describe('Registration with valid data', () => {

   before(() => {
      Registration.visitInTheSite();
      Registration.checkLocation('/');
      Registration.navigateToTheRegistrationPage();
      Registration.checkLocation('/register');
   });

   it('Fill all fields', () => {
      Registration.selectMaleGender();
      Registration.typefirstName(firstName);
      Registration.typeLastName(lastName);
      Registration.setDayOfBirth(Function.random(28, 1));
      Registration.setMonthOfBirth(Function.random(12, 1));
      Registration.setYearOfBirth(Function.random(2022, 1912));
      Registration.typeEmail(email);
      Registration.typeCompanyName(companyName);
      Registration.DisableNewsletter();
      Registration.typePassword(password);
      Registration.typeConfirmPassword(password);
      Registration.clickRegisterButton();
      Registration.checkLocation('/registerresult/1');
      Registration.checkSuccessfulMessage('Your registration completed');
   });

});