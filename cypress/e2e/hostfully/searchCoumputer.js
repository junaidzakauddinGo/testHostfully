import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { search, searchPOM } from "../../support/pages/searchComputer";

Given("user navigates to website", () => {
  cy.visit('https://computer-database.gatling.io/computers');
});

When("Inputs computer name and clicks on search", () => {
	searchPOM.getSearchField().should('exist')
	searchPOM.getSearchField().find('#searchbox').should('have.attr', 'placeholder').and('eq', 'Filter by computer name...')
	searchPOM.getSearchField().find('#searchsubmit').should('have.attr', 'value').and('eq', 'Filter by name')
	searchPOM.getSearchField().find('#searchbox').type('Acer')
	searchPOM.getSearchField().find('#searchsubmit').click()
});

Then("Verify the searched name and records count", () => {
  searchPOM.getRowCount()
	searchPOM.getCompareCount()
});