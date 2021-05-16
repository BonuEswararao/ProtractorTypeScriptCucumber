import {Before,After, Status} from "@cucumber/cucumber";
import { browser } from "protractor";
Before({tags:"@firstTest"},function(){
browser.manage().window().maximize();
})

After({tags:"@firstTest"},function(){
   console.log("Test is Completed");
    })
    //Takes screen shot on failure
    After(async function(scenario){
      if(scenario.result.status === Status.FAILED){
         const screenshot = await browser.takeScreenshot();
         this.attach(screenshot, "image/png");
      }
       })