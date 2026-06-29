import {test,expect} from "@playwright/test";



// 1. Amazon – Search History Validation 
// Viewport: 1366 × 768
// Launch Amazon.
// Set viewport.
// Enter "Laptop".
// Press Enter.
// Navigate back.
// Validate search box still contains "Laptop".
// Read search value.
// Assert value equals "Laptop".


// 2. Demo WebShop

// Set viewport to 1366 x 780
// Launch demowebshop application
// click on Digital downloads
// click on music 2  Having actual price of 10.00
// Verify that shopping cart was increased it's count or not
// Open the shopping cart
// target the quantity input field and change that 1 to 3
// Hit Enter button 
//  and verify that total price was changed to 30 or not price

// 3. Blinkit – Search and Clear
// Launch Blinkit.
// Enter "Chocolate".
// Validate value entered.
// Clear textbox.
// Validate textbox empty.
// Enter "Juice".
// Capture value.
// Assert value equals "Juice".



// 4. Blinkit – Keyboard Shortcut Scenario

// Enter "ButterMilk".
// Press Ctrl+A.
// Press Ctrl+X.
// Verify field empty.
// Press Ctrl+V.
// Verify text restored.
// Take screenshot.
// Assert value equals ButterMilk.
// Hit On Enter
// Add Slurrp Farm Banana Chocochip Pancake Mix to cart
// Add  Hershey's Hazelnut Syrup 
// validate that cart count was increased or not
// print the total cart price


// 5. Saucedemo validation
// Launch SauceDemo.
// Leave username empty.
// Leave password empty.
// Click Login.
// Capture error message.
// Verify error displayed.
// Verify message length > 5.
// Assert validation.
// Now Give Correct credentials and Login
//  Click Sauce Labs Fleece Jacket to add to cart using traversing


// test("Amazon",async({page})=>{
//   await page.setViewportSize({width:1336,height:768})
//   await page.waitForTimeout(2000);
//  await page.goto("https://www.amazon.in/");
//  await page.locator(`//input[@placeholder="Search Amazon.in"]`).fill("Laptop");
//  await page.keyboard.press("Enter");
//  await page.waitForTimeout(2000);
//  await page.goBack();
//  await expect(await page.locator(`//input[@placeholder="Search Amazon.in"]`).textContent()).toBe("Laptop")

// });

// test("demoshop",async({page})=>{
//   await page.setViewportSize({width:1336,height:780});
//   await page.goto("https://demowebshop.tricentis.com/")
//   await page.locator(`(//a[@href="/digital-downloads"])[1]`).click();
//   await page.locator(`(//input[@type="button"])[4]`).click()
//   await page.waitForTimeout(2000)
//   await page.locator(`(//a[@class="ico-cart"])[1]`).click();
//   await page.waitForTimeout(2000);
//   await page.locator(`//input[@class="qty-input"]`).fill("3");
  
//   await page.keyboard.press("Enter");
//    await page.waitForTimeout(2000)
//  await  expect(await page.locator(`//span[@class="product-subtotal"]`).textContent()).toBe("9.00");

// })

// test("Blinkit",async({page})=>{
//   await page.goto("https://blinkit.com/");
  
//   await page.locator(`//button[@class="btn location-box mask-button"]`).click()
//   await page.locator(`//div[@class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]`).click();
//   await page.locator(`[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]`).fill("Choclate")
//   await page.keyboard.press("Enter");


//   let a=  await page.locator(`[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]`).inputValue()
//   expect(a).toBe("Choclate");

//   await page.locator(`[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]`).clear();
//   let b=  await page.locator(`[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]`).inputValue();
//   expect(b).toBe("");
//   await page.locator(`[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]`).fill("Juice")
//   let a1= await page.locator(`[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]`).inputValue();
//   expect(a1).toBe("Juice");
// })




 

// test("Bakery",async({page})=>{
// await page.goto("https://blinkit.com/");
// await page.locator(`//button[@class="btn location-box mask-button"]`).click()
// await page.locator('[class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
// await page.waitForTimeout(2000);

// await  page.locator('[placeholder="Search for atta dal and more"]').fill('pancake');
// await page.waitForTimeout(3000);
// await page.keyboard.press("Control+A");
// await page.keyboard.press("Control+x");
// let b=await  page.locator('[placeholder="Search for atta dal and more"]').inputValue();
// expect(b).toBe("");
// await page.keyboard.press("Control+V");
// let r=await  page.locator('[placeholder="Search for atta dal and more"]').inputValue();
// expect(r).toBe("pancake");
// await page.screenshot({path:"screenshot/blink.jpg"});
// await  page.keyboard.press("Enter")
// await page.locator(`(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[4]`).click();
// await page.locator(`(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[5]`).click();

// let x=await page.locator(`//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][1]`).textContent();
// expect(x).toBe( "2 items");
// let y=await page.locator(`//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][2]`).textContent();
// console.log(y);
// })


// test("errormsg",async({page})=>{
// await page.goto("https://www.saucedemo.com/");
// await page.locator('//input[@placeholder="Username"]');
// await page.keyboard.press("Tab");
// await page.keyboard.press("Tab");
// await page.locator('[class="submit-button btn_action"]').click();
// await page.locator('//h3[.="Epic sadface: Username is required"]').textContent();
// await expect(await page.locator('//h3[.="Epic sadface: Username is required"]')).toBeVisible();
// let varlenght=await page.locator('//h3[.="Epic sadface: Username is required"]').textContent();
// if(varlenght.length>5){
//     console.log("verfy")
// }
// else{
//     console.log("not verified");
//   }
// await page.locator('//input[@placeholder="Username"]').fill("standard_user");
// await page.locator('[placeholder="Password"]').fill("secret_sauce")
// await page.locator('[class="submit-button btn_action"]').click();
// await page.locator('(//button[@class="btn btn_primary btn_small btn_inventory "])[4]').click();
// })