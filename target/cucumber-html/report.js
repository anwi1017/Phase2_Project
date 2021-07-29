$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Testing Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveTest"
    }
  ]
});
formatter.step({
  "name": "User has landed on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User will land on Products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@PositiveTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has landed on Swag Labs website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_landed_on_swag_labs_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will land on Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_will_land_on_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message when entering incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeTest"
    }
  ]
});
formatter.step({
  "name": "User has landed on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.step({
  "name": "an \"\u003cerror_message\u003e\" will display",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "error_message"
      ]
    },
    {
      "cells": [
        "user",
        "password",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message when entering incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@NegativeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has landed on Swag Labs website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_landed_on_swag_labs_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an \"Epic sadface: Username and password do not match any user in this service\" will display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.an_something_will_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Testing adding products to cart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductsFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that user is able to add the single product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Single"
    }
  ]
});
formatter.step({
  "name": "User is on Products page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects the product and clicks Add to Cart button \"\u003cProduct_Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on cart icon and see products",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product_Name"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has landed on Swag Labs website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_landed_on_swag_labs_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user is able to add the single product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductsFeature"
    },
    {
      "name": "@Single"
    }
  ]
});
formatter.step({
  "name": "User is on Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsSteps.user_is_on_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects the product and clicks Add to Cart button \"Sauce Labs Bolt T-Shirt\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductsSteps.user_selects_the_product_and_clicks_add_to_cart_button_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on cart icon and see products",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.user_clicks_on_cart_icon_and_see_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has landed on Swag Labs website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_landed_on_swag_labs_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user is able to add multiple products to the cart using datatable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProductsFeature"
    },
    {
      "name": "@Multiple"
    }
  ]
});
formatter.step({
  "name": "User is on Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsSteps.user_is_on_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects the product and clicks Add to Cart button",
  "rows": [
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ProductsSteps.user_selects_the_product_and_clicks_add_to_cart_button(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on cart icon and see products",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.user_clicks_on_cart_icon_and_see_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});