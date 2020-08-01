import {Config} from 'protractor';
// An example configuration file
import * as reporter from "cucumber-html-reporter";
export let config: Config = {
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect:true,
   framework:'custom',
   frameworkPath:require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    onComplete:()=>{
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreporter.json',
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
    
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/test.feature'],
    cucumberOpts: {
        format:'json:./cucumberreporter.json',
        tags:"@functional",
        require: ['./stepDefinations/*.js']
    }
  

  };
  