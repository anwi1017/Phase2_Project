package stepDefinitions;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class ProductsSteps {

	WebDriver driver = BaseClass.driver;


    @Given("^User is on Products page$")
    public void user_is_on_products_page() throws Throwable {
        
    	WebElement ProductPageTitle = driver.findElement(By.xpath("//*[@class='title']"));
    	String ActText = ProductPageTitle.getText();
    	String ExpText = "PRODUCTS";
    	
    	Assert.assertEquals(ExpText,ActText);
    	Thread.sleep(3000);
    }


    @When("^User selects the product and clicks Add to Cart button \"([^\"]*)\"$")
    public void user_selects_the_product_and_clicks_add_to_cart_button_something(String Product_Name) throws Throwable {
        
		WebElement btnProductSelection = driver.findElement(By.xpath("//*[text()='" + Product_Name + "']//following::button[1]"));
		btnProductSelection.click();
		Thread.sleep(3000);
    }
    
    @When("^User selects the product and clicks Add to Cart button$")
    public void user_selects_the_product_and_clicks_add_to_cart_button(DataTable table) throws Throwable {
    	
    	for(int i=0;i<3;i++) {
    	String Product = table.cell(i,  0);
    	
		WebElement btnProductSelection = driver.findElement(By.xpath("//*[text()='" + Product + "']//following::button[1]"));
		btnProductSelection.click();
		
		Thread.sleep(2000);
    	}
    }

    @Then("^User clicks on cart icon and see products$")
    public void user_clicks_on_cart_icon_and_see_products() throws Throwable {
    	
    	WebElement ShoppingCart = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
    	ShoppingCart.click();
    	Thread.sleep(3000);
        
    }





}
