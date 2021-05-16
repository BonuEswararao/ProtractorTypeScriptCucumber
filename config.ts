import {Config} from 'protractor';
export let config:Config = {
   // framework: 'jasmine',
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect : true,
    specs: ['testSpec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }