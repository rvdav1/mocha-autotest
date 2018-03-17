'use strict';

let assert = require('chai');
let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

let expect = chai.expect;

/**
 * Global hook
 */
before(function () {
    console.log('before every test in every file');
    //open browser somewhere here
});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });

        it('should return 1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(2)).to.equal(1);
        });
    });    
});