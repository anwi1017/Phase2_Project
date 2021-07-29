package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginSteps {

	WebDriver driver = BaseClass.driver;
	
	@Given("^User has landed on Swag Labs website$")
    public void user_has_landed_on_swag_labs_website() throws Throwable {
        
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
    }

    @When("^User enters username \"([^\"]*)\"$")
    public void user_enters_username_something(String username) throws Throwable {
        
		WebElement UserName = driver.findElement(By.xpath("//*[@id='user-name']"));
		UserName.sendKeys(username);
    }

    @Then("^User will land on Products page$")
    public void user_will_land_on_products_page() throws Throwable {
    	
    	WebElement ProductPageTitle = driver.findElement(By.xpath("//*[@class='title']"));
    	String ActText = ProductPageTitle.getText();
    	String ExpText = "PRODUCTS";
    	
    	Assert.assertEquals(ExpText,ActText);
    	Thread.sleep(3000);
    }

    @Then("^an \"([^\"]*)\" will display$")
    public void an_something_will_display(String errormessage) throws Throwable {
        
    	WebElement ErrorMessage = driver.findElement(By.xpath("//*[@data-test='error']"));
    	String ActError = ErrorMessage.getText();
    			
    	Assert.assertEquals(ActError,  errormessage);
    	Thread.sleep(3000);
    	
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void user_enters_password_something(String password) throws Throwable {
        
 		WebElement Password = driver.findElement(By.xpath("//*[@id='password']"));
        Password.sendKeys(password);
    }

    @And("^User clicks Login button$")
    public void user_clicks_login_button() throws Throwable {
        
 		WebElement Submit = driver.findElement(By.xpath("//*[@id='login-button']"));
 		Submit.click();
    }


}
