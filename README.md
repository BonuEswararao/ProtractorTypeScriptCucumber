# ProtractorTypeScriptCucumber
Protractor TypeScript Cucumber Framework implementation

Protractor Course:
Installation Process:
Download Node.js
Set node in system variables
To Check node Version => node -v
To Check npm Version => npm -v
To install Protractor globally => npm install -g protractor
To know Protractor Version => protractor --version
To uninstall protractor => npm uninstall -g protractor
To update webdriver manager => webdriver-manager update
To start the selenium server => webdriver-manager start
Protractor official website => https://www.protractortest.org/#/
Protractor uses jasmine framework to write tests

Jasmine Terminologies:
describe represents Test Suite
it represents TestCase
spec is testFile in jasmine
Every spec should have describe and it blocks
Configuration File => which contains spec files that needs to run
Each it block is considered as spec during execution.
//Install angular js plugin or auto suggestions
To run Protractor Tests => protractor config.js

Node Package manager js link => https://www.npmjs.com/
To create package.json file => npm init -f
To install the dependencies for your project => npm install
On running npm install => node modules folder should be created on main project folder
npm run <scriptname> - to run the script
Ex: npm run webdriver-start > it will take the value of that and run
npm run start > to run all the commands
we have to put everything in scripts so that its is specific to projest and not globally.

Example:

download the jasmine protractor html report
Non Angular app : https://www.rahulshettyacademy.com/AutomationPractice/
Angular app - https://qaclickacademy.github.io/protocommerce/

protractor config.js

If you could not able to launch Protractor tests then set directConnect : true in config.js

Type Script:
TypeScript = JavaScript + Additional Stuff
Type Script Official Website : https://www.typescriptlang.org/
To install type script => npm install -g typescript
To Know Type Script Version => tsc -v
To Convert the Typescript file into Javascript => tsc <typescriptFileName>
Make a habit of using let keyword in Typescript.
For Constants make use of const keyword in Typescript


Protractor Type Script Cucumber Frame Work Implementation:
Create pacakge.json and include all the dependencies required.Make sure the dependencies are of latest version.
Create Typescript spec file and config file and have the code.
Create tsconfig.json to convert the Typescript code to Javascript code.
Make sure tsconfig.json file has all the compilerOptions properties required for conversion 
To create package.json file => npm init
To Install the dependencies available in package.json => npm install
Go To Protractor Official website => Reference drop down => Using Type script
https://github.com/angular/protractor/tree/5.4.1/exampleTypescript
To install Protractor at project level => npm install protractor and observe package.json


Why Typescript?
The main advantage of Typescript over JavaScript is that Typescript is a superset of JavaScript.
Typescript = Javascript + additional object oriented principles.
Typescript is an object-oriented language Which makes our code more consistent,clean, simple and reusable. So it should better to use typescript for developing large projects.
Convert back to java script
Why to convert ts back to jS? 
If u are working on Typescript then u need to convert the ts code to js,then your js code will be (js + additonal stuf) which is robust = Typescript compiled Javascript
Protractor compiler is designed to run the js files only
To Create tsconfig.json => tsc --init => This will help us to convert the Typescript code to Javascript code.
To convert the ts code to js code => tsc
To Run Protractor Tests => protractor JSFiles/config.js

await/async is used to wait till a particular step execution is completed.
to use await one should use async function.

Protractor Cucumber Framework:
Install Cucumber Dependencies:
https://www.npmjs.com/package/protractor-cucumber-framework
protractor-cucumber-framework
cucumber
@types/cucumber  -- add @cucumber/cucumber dependency instead of cucumber and @types/cucumber as these are deprecated.
chai
chai-as-promised
Add Chai Assertions
Chai Official Website:https://www.chaijs.com/
cucumber-html-reporter
Cucumber tags topis
cucumber hooks fore before and after tests
screen shot on failures
HTML Report generation for excellent cleint reports




Add Extensions to Visual studio - Cucumber Jerkin to support auto suggestions.

Protractor Typescript:
Install dependencies needed for protractor Typescript Framework
Build the basic protractor Typescript project with spec and config file
Minor changes which needed foe existing protractor javascript to convert to typescript syntax
How protractor works in the backend for Typescript
Typescript configuration file importamce in compiling
All set Run any protractor java script program using typescript
Importance of async/await for synchronization
Build page object files to separate web objects into spec files
importamce of package.json to manage the dependencies and build scripts
