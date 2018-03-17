'use strict';

beforeEach(function () {
    console.log('Opening EPAM site');
    return driver.get('https://www.epam.com/careers');
});

after(function () {
    return driver.quit();
});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });

        it('should return 1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(2)).to.equal(2);
        });
    });
});