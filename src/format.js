/**
 * @preserve format.js v1.0.0 (c) 2013 knowledgecode | MIT licensed
 */
/*global define, module */
/*jslint browser: true, plusplus: true, regexp: true */
(function () {
    'use strict';

    /**
     * @name format
     * @function
     * @param {string} str
     * @return {string} processed string
     */
    var format = function (str) {
        var matcher = /(^|[^%])(%%)*(%[\-0]?[1-9]\d*|%)[doxs]/g,
            re = /(?:%)(-|0|)(\d*)([doxs])/,
            index = 0,
            i = 1,
            radix = { 'd': 10, 'o': 8, 'x': 16 },
            value = '',
            result,
            pieces,
            arg,
            len,
            space;

        while ((result = matcher.exec(str)) !== null) {
            value += str.substring(index, result.index);
            index = matcher.lastIndex;
            pieces = re.exec(result[0]);
            if (pieces[3] === 's') {
                arg = arguments[i];
            } else {
                arg = arguments[i].toString(radix[pieces[3]]);
            }
            len = parseInt(pieces[2], 10) - arg.length;
            space = [];
            if (len > 0) {
                space[len] = '';
            }
            switch (pieces[1]) {
            case '-':
                arg += space.join(' ');
                break;
            case '0':
                if (arguments[i] < 0) {
                    arg = '-' + space.join('0') + arg.substring(1);
                } else {
                    arg = space.join('0') + arg;
                }
                break;
            default:
                arg = space.join(' ') + arg;
                break;
            }
            value += result[0].replace(pieces[0], arg);
            i++;
        }
        value += str.substring(index);
//alert(value);
        return value.replace(/%%/g, '%');
    };

    // export
    if (typeof define === 'function' &&
            typeof module === 'object' && module.exports) {
        module.exports = format;
    } else {
        window.format = format;
    }

}());
