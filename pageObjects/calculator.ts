import { element, ElementFinder, by} from "protractor";

export class calculator{
    firstEditBox : ElementFinder;
    secondEditBox : ElementFinder;
    goButton : ElementFinder;
    result : ElementFinder;

    constructor(){
        this.firstEditBox = element(by.model('first'));
        this.secondEditBox = element(by.model('second'));
        this.goButton = element(by.id('gobutton'));
        this.result = element(by.css('h2[class="ng-binding"]'));
    }
}