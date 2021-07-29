package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class BaseClass {

public static WebDriver driver;
	
	@Before
	public void setup() {
		
		System.setProperty("webdriver.chrome.driver","chromedriver");
		driver = new ChromeDriver();
		
	}

	@After("@LoginFeature")
	public void teardown() {
		
		driver.quit();
		
	}
	
	@After("@ProductsFeature")
	public void logout() throws InterruptedException {
		
		WebElement menu = driver.findElement(By.xpath("//*[@id='react-burger-menu-btn']"));
		menu.click();
		Thread.sleep(3000);
		
		WebElement logoutbtn = driver.findElement(By.xpath("//*[@id='logout_sidebar_link']"));
		logoutbtn.click();
		Thread.sleep(3000);
		
		driver.quit();
		
	}
}
