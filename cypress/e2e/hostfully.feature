Feature: Adding a new Computer

  Scenario: Verify add new computer page details
    Given user navigates to website
    When user navigate to add new computer page
    Then user can see the add new computer page details

  Scenario: Verify submitting form without any input from user
    Given user navigates to website
    When user navigate to add new computer page
    And user clicks on create this computer button
    Then user gets required name error

  Scenario: Verify Cancel Button
    Given user navigates to website
    When user navigate to add new computer page
    And user clicks on Cancel button
    Then user is redirected to homepage

  Scenario: Verify Computer Name is a Required Field
    Given user navigates to website
    When user navigate to add new computer page
    And user inputs details except for Computer Name
    And user clicks on create this computer button
    Then user gets required name error

  Scenario: Verify Date Field Format
    Given user navigates to website
    When user navigate to add new computer page
    And user inputs invalid dates
    And user clicks on create this computer button
    Then user gets date format error
  
  Scenario: Verify Adding New Computer
    Given user navigates to website
    When user navigate to add new computer page
    And user inputs valid details
    And user clicks on create this computer button
    Then gets successful creation alert