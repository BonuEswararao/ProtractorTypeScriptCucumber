"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@firstTest" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@firstTest" }, function () {
    console.log("Test is Completed");
});
//Takes screen shot on failure
cucumber_1.After(async function (scenario) {
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        const screenshot = await protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBd0Q7QUFDeEQsMkNBQXFDO0FBQ3JDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEVBQUM7SUFDM0Isb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEVBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFBO0FBQ0YsOEJBQThCO0FBQzlCLGdCQUFLLENBQUMsS0FBSyxXQUFVLFFBQVE7SUFDM0IsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBQztRQUN6QyxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdkM7QUFDQSxDQUFDLENBQUMsQ0FBQSJ9