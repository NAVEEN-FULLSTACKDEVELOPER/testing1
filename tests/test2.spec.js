import {expect, test} from '@playwright/test'
import { log } from 'node:console';

// Scenario 1 : AMAZON.IN

// -> Launch amazon.in
// -> Search for rc cars 
// -> In suggestions click on rc cars drift
// -> click on 5th product
// -> click on quantity drop down
// -> change the quantity into 5
// ->click on ADD TO CART
// -> click on go to cart
// ->now click on (-) to delete one product 
// ->Print Final price



// Scenario 2: QSPIDERSDEMOAPP

// -> open : https://demoapps.qspiders.com/ui?scenario=1
// -> Click on Popups
// -> Click on Browser windows
// -> Click on view more of Laptops
// -> Click  on Add to Cart for 3 times
// -> Check whether the cart count was increased to 3 or not
// -> Click on Cart icon
// -> Print the length of cart and validate whether it is equal to 3 or not


// Scenario 2
//  -> Launch : https://demoqa.com/login
// -> Click on new user button
// -> fill first name, and copy the first name
// ->paste firstname in username
// ->Fill password (Note: In password use capital , small, special symbols also give atleat 10 letters)
// -> Click on login
// ->Now click on back to login
// -> validate whethrt the Books:  page opened or not
// -> validate whther the username accepted is same as you given or not
// ->Click on goto book store
// ->Click on Learning Java Script Design patterns books
// ->Print subtitle and total pages of it
// ->Click on logout 
// ->check whether the Welocome page displayed or not


test("test1",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('[id="twotabsearchtextbox"]').fill("rc cars");
    await page.waitForTimeout(2000);

    for(let i=1;i<11;i++){
      await page.keyboard.press("ArrowDown");
// await page.waitForTimeout(2000)
      let a = await page.locator(`[id="sac-suggestion-row-${i}"]`).textContent();
     
     if(a=="rc cars drift"){
      let a = await page.locator(`[id="sac-suggestion-row-${i}"]`).click()
      await page.waitForTimeout(2000)
       break;
    }
    }

    let[page1]=await Promise.all([page.waitForEvent('popup'), page.locator('(//a[@class="a-link-normal s-line-clamp-4 s-link-style a-text-normal"])[5]').click()])
    await page.waitForTimeout(2000);
     await page1.locator('[id="quantity"]').selectOption({value:"5"})
    await page1.locator('[id="add-to-cart-button"]').click();
    await page.waitForTimeout(2000);
    await page1.locator('(//a[@class="a-button-text"])[3]').click();
    await page.waitForTimeout(2000)
    await page1.locator('[class="a-icon a-icon-small-remove"]').click();
    await page.waitForTimeout(2000)
    let a=await page1.locator('(//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap"])[1]').textContent()
 console.log(a);
 })


test.only("test2",async({page})=>{
 await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
 await page.locator('//section[text()="Popups"]').click();
 await page.waitForTimeout(2000)
 await page.locator('//section[text()="Browser Windows"]').click()
 await page.waitForTimeout(2000)

 let [page1]=await Promise.all([page.waitForEvent('popup'), page.locator('(//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"])[2]').click()])
 await page.waitForTimeout(2000)
 for(let i=0;i<3;i++){
 await page1.locator('//button[text()="Add to Cart"]').click();
}
await page.waitForTimeout(2000)
let a=await page1.locator('//article[text()="3"]').textContent()
console.log(a);

await expect(a).toBe("3");
await page1.locator('[stroke="currentColor"]').click();

await page.waitForTimeout(2000)
    let total=await page1.locator('//div[@class="flex items-center justify-between p-4 border rounded-lg"]').all()
    console.log(total.length);
    await expect(total.length).toBe(3)

 })



test("qspiderdemo",async({page})=>{
    await page.goto("https://demoqa.com/login")
    await page.locator('//button[text()="New User"]').click()
    await page.locator('[id="firstname"]').fill("NAVEEN")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.locator('[id="lastname"]').fill("M")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Tab")
    await page.locator('[id="password"]').fill("Naveen@123")
    await page.locator('[id="register"]').click()
    await page.locator('[id="gotologin"]').click()
    await page.locator('[placeholder="UserName"]').fill("NAVEEN")
    await page.locator('[placeholder="Password"]').fill("Naveen@123")
    await page.locator('[id="login"]').click()
    await page.waitForTimeout(2000)
   let d = await page.locator('(//label[@id="userName-label"])[1]').textContent()
  await expect(d).toBe("Books : ")
   await page.waitForTimeout(2000)
   let f = await page.locator('[id="userName-value"]').textContent()
   console.log(f);
   
   await expect(f).toBe("NAVEEN");
    await page.waitForTimeout(2000)
    await page.click('[id="gotoStore"]')
    await page.click('//span[@id="see-book-Learning JavaScript Design Patterns"]/a')
    let a = await page.locator('(//div[@class="col-md-9 col-sm-12"])[2]').textContent();
    console.log(a);
    let b = (await page.locator('(//div[@class="col-md-9 col-sm-12"])[6]').textContent());
    console.log(b);
    await page.click('[id="submit"]')
    let c = await page.locator('//form[@id="userForm"]//h2').textContent()
    expect(c).toBe("Welcome,")
    await page.waitForTimeout(2000)
        
})
