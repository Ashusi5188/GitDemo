import {Before,After, Status} from 'cucumber';
import { browser } from 'protractor';

Before({tags: "@functional"}, function () {
   browser.manage().window().maximize();
  });
  After( async function (scenario) {
   if(scenario.result.status==Status.FAILED){
         const screenshot=await browser.takeScreenshot();
         this.attach(screenshot,"image/png");
   }
  });