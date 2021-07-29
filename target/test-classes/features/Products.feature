@ProductsFeature
Feature: Testing adding products to cart

  Background: 
    Given User has landed on Swag Labs website
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks Login button

  @Single
  Scenario Outline: Verify that user is able to add the single product to cart
    Given User is on Products page
    When User selects the product and clicks Add to Cart button "<Product_Name>"
    Then User clicks on cart icon and see products

    Examples: 
      | Product_Name            |
      | Sauce Labs Bolt T-Shirt |

  @Multiple
  Scenario: Verify that user is able to add multiple products to the cart using datatable
    Given User is on Products page
    When User selects the product and clicks Add to Cart button
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Backpack               |
      | Test.allTheThings() T-Shirt (Red) |
    Then User clicks on cart icon and see products
