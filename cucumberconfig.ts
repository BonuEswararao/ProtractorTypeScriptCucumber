import {Config} from 'protractor';
//import (reporter) from 'cucumber-html-reporter';
//import * as reporter from 'cucumber-html-reporter';
var reporter = require('cucumber-html-reporter');
export let config:Config = {
   // framework: 'jasmine',
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect : true,
   // set to "custom" instead of cucumber.
   framework: 'custom',
   // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/calcfeature.feature'],
    capabilities: {
      browserName: 'chrome'
    },
    cucumberOpts: {
        // require step definitions
        tags:"@firstTest",
        format:'json:../cucumber_report.json',
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      },

      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumber_report.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
  
      reporter.generate(options);
      }
  }