Feature: hostfully test

  Scenario: test adding new computer
    Given user hits website
    When add new computer
    Then it should create computer
