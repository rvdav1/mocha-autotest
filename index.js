'use strict';
require('chromedriver');

let chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
global.expect = chai.expect;

/**
 * This following 3 functions are for handling this issues: process.nextTick(function(){ throw error; }); // prevent swallow by unhandled rejection
 */
process.on('unhandledRejection', function (error, promise) {
    console.log('UPR: ' + promise + ' with ' + error);
    console.log(error.stack)
});
process.on('unhandledRejection', function (err) {
    throw err;
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

let webdriver = require('selenium-webdriver');
global.by = webdriver.By;

global.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
global.driver.manage().window().maximize();