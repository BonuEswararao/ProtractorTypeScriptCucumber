import { Given, When, Then } from "@cucumber/cucumber";
import { browser } from "protractor";
import { calculator } from '../pageObjects/calculator';
import chai from 'chai';
var expect = chai.expect;
let calc = new calculator();
Given('i will navigate to cal page', async () => {

    browser.waitForAngularEnabled(true);
    await browser.get('http://juliemr.github.io/protractor-demo/');
});

When('i enter numbers {string} and {string}', function (string , string2) {
    calc.firstEditBox.sendKeys(string);
    calc.secondEditBox.sendKeys(string2);
    calc.goButton.click();
});

Then('result should be {string}', function (string) {
    
    calc.result.getText().then(function(text){
        expect(text).to.equal(string);
    })
        

});