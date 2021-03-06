/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-22.js
 * @description Object.defineProperties - 'O' is the Arguments object which implements its own [[GetOwnProperty]] method to get 'P' (8.12.9 step 1 ) 
 */


function testcase() {
        var arg = function () {
            return arguments;
        }();

        Object.defineProperty(arg, "prop", {
            value: 11,
            configurable: false
        });

        try {
            Object.defineProperties(arg, {
                prop: {
                    value: 12,
                    configurable: true
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
