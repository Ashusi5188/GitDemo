import { Given,When,Then } from "cucumber";
import { browser } from "protractor";
import { AngularHomePage } from "../pageobjects/angulajsHomePage";
import  chai  from "chai";
let angularhomepage=new AngularHomePage();
var expect = chai.expect;


  Given('I naviate to angular website', async ()=> {
   
    await browser.get("https://angularjs.org/");
  });

  Given('I naviate to {string} website', async (string)=> {
     if(string=='angular'){
        await browser.get("https://angularjs.org/");
     }
  });

  When('I click on Headel link', async ()=> {
    await angularhomepage.link.click();
  });

  When('I enter {string} in serach box', async (string)=> {
    browser.sleep(1000);
     await angularhomepage.searbox.sendKeys(string);
     expect("hello").to.equal(string);
  });

  Then('User naviagtes to Home page', function () {
   
  });


     