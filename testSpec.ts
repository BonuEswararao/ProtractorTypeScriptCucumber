import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { calculator } from './pageObjects/calculator';

describe('Protractor Demo App', ()=> {
    it('should have a title', async()=> {
        browser.waitForAngularEnabled(true);
     await browser.get('http://juliemr.github.io/protractor-demo/');
        browser.getTitle().then(function(text){
            console.log(text);
        })
      expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should have a title1', ()=> {
        let calc = new calculator();
        calc.firstEditBox.sendKeys("2");
        calc.secondEditBox.sendKeys("5");
        browser.sleep(8000);
       });
  });