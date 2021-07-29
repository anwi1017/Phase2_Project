@LoginFeature
Feature: Testing Login Functionality

  @PositiveTest
  Scenario Outline: Verify Login Functionality with correct username and password
    Given User has landed on Swag Labs website
    When User enters username "<Username>"
    And User enters password "<Password>"
    And User clicks Login button
    Then User will land on Products page

    Examples: 
      | Username      | Password     |
      | standard_user | secret_sauce |

  @NegativeTest
  Scenario Outline: Verify the error message when entering incorrect username and password
    Given User has landed on Swag Labs website
    When User enters username "<Username>"
    And User enters password "<Password>"
    And User clicks Login button
    Then an "<error_message>" will display

    Examples: 
      | Username | Password | error_message                                                             |
      | user     | password | Epic sadface: Username and password do not match any user in this service |
