import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { computerPOM } from "../../support/pages/addComputer";

Given("user navigates to website", () => {
  cy.visit('https://computer-database.gatling.io/computers');
});

When("user navigate to add new computer page", () => {
  computerPOM.getAddNewComputerButton().should('exist')
  computerPOM.getAddNewComputerButton().click()
  cy.wait(2000)
});

Then("user can see the add new computer page details", () => {
  computerPOM.getURL().should('include', "/computers/new")
  computerPOM.getPageTitle().should('exist')
  computerPOM.getPageTitle().should('contain', 'Add a computer')
  computerPOM.getComputerName().should('exist')
  computerPOM.getComputerName().should('contain', 'Computer name')
  computerPOM.getComputerName().should('contain', 'Required')
  computerPOM.getIntroducedDate().should('exist')
  computerPOM.getIntroducedDate().should('contain', 'Introduced')
  computerPOM.getIntroducedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getDiscontinuedDate().should('exist')
  computerPOM.getDiscontinuedDate().should('contain', 'Discontinued')
  computerPOM.getDiscontinuedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getCompany().should('exist')
  computerPOM.getCompany().should('contain', 'Company')
  computerPOM.getSubmitButton().should('exist')
  computerPOM.getSubmitButton().should('have.attr', 'value').and('eq', 'Create this computer')
  computerPOM.getCancelButton().should('exist')
  computerPOM.getCancelButton().should('contain', 'Cancel')
});

And("user clicks on create this computer button", () => {
  computerPOM.getURL().should('include', "/computers/new")
  computerPOM.getSubmitButton().should('exist')
  computerPOM.getSubmitButton().should('have.attr', 'value').and('eq', 'Create this computer')
  computerPOM.getSubmitButton().click()
});

Then("user gets required name error", () => {
  computerPOM.getComputerName().should('contain', 'Failed to refine type : Predicate isEmpty() did not fail.')
});

And("user clicks on Cancel button", () => {
  computerPOM.getURL().should('include', "/computers/new")
  computerPOM.getCancelButton().should('exist')
  computerPOM.getCancelButton().should('contain', 'Cancel')
  computerPOM.getCancelButton().click()
});

Then("user is redirected to homepage", () => {
  computerPOM.getURL().should('include', "/computers")
});

And("user inputs details except for Computer Name", () => {
  computerPOM.getURL().should('include', "/computers/new")
  computerPOM.getIntroducedDate().should('contain', 'Introduced')
  computerPOM.getIntroducedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getIntroducedDate().should('exist')
  computerPOM.getIntroducedDate().find('#introduced').type('2022-01-01')
  computerPOM.getDiscontinuedDate().should('contain', 'Discontinued')
  computerPOM.getDiscontinuedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getDiscontinuedDate().should('exist')
  computerPOM.getDiscontinuedDate().find('#discontinued').type('2022-12-31')
  computerPOM.getCompany().should('contain', 'Company')
  computerPOM.getCompany().should('exist')
  cy.get('select').select('Nokia').should('have.value', '16')
});

And("user inputs invalid dates", () => {
  computerPOM.getURL().should('include', "/computers/new")
  computerPOM.getComputerName().should('exist')
  computerPOM.getComputerName().should('contain', 'Computer name')
  computerPOM.getComputerName().should('contain', 'Required')
  computerPOM.getComputerName().find('#name').type('Dell i7')
  computerPOM.getIntroducedDate().should('contain', 'Introduced')
  computerPOM.getIntroducedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getIntroducedDate().should('exist')
  computerPOM.getIntroducedDate().find('#introduced').type('abcd')
  computerPOM.getDiscontinuedDate().should('contain', 'Discontinued')
  computerPOM.getDiscontinuedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getDiscontinuedDate().should('exist')
  computerPOM.getDiscontinuedDate().find('#discontinued').type('2021-21')
});

Then("user gets date format error", () => {
  computerPOM.getIntroducedDate()
  .should('contain', "Failed to decode date : java.time.format.DateTimeParseException: Text 'abcd' could not be parsed at index 0")
  computerPOM.getDiscontinuedDate()
  .should('contain', "Failed to decode date : java.time.format.DateTimeParseException: Text '2021-21' could not be parsed at index 7")
});

And("user inputs valid details", () => {
  computerPOM.getURL().should('include', "/computers/new")
  computerPOM.getComputerName().should('exist')
  computerPOM.getComputerName().should('contain', 'Computer name')
  computerPOM.getComputerName().should('contain', 'Required')
  computerPOM.getComputerName().find('#name').type('Dell i7')
  computerPOM.getIntroducedDate().should('exist')
  computerPOM.getIntroducedDate().find('#introduced').type('2022-01-01')
  computerPOM.getDiscontinuedDate().should('contain', 'Discontinued')
  computerPOM.getDiscontinuedDate().should('contain', "Date ('yyyy-MM-dd')")
  computerPOM.getDiscontinuedDate().should('exist')
  computerPOM.getDiscontinuedDate().find('#discontinued').type('2022-12-31')
  computerPOM.getCompany().should('contain', 'Company')
  computerPOM.getCompany().should('exist')
  cy.get('select').select('Nokia').should('have.value', '16')
});

Then("gets successful creation alert", () => {
  computerPOM.getURL().should('include', "/computers")
  cy.get('.alert-message').should('contain', 'Done !  Computer Dell i7 has been created')
});
