import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("user hits website", () => {
  cy.visit("https://example.cypress.io");
});

When("add new computer", () => {
  cy.log("its nothing");
});

Then("it should create computer", () => {
  cy.log("its nothing");
});
