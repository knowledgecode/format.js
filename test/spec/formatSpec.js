/*global describe, it, expect, require */
/*jslint browser: true */
describe('format', function () {
    'use strict';

    var format;

    if (typeof require === 'function') {
        format = require('format');
    } else {
        format = window.format;
    }

    describe('digit: none, decimal', function () {
        it('positive, integer', function () {
            var s = format('%d', 10),
                e = '10';
            expect(s).toEqual(e);
        });

        it('positive, float', function () {
            var s = format('%d', 1.23),
                e = '1.23';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%d', -50),
                e = '-50';
            expect(s).toEqual(e);
        });

        it('negative, float', function () {
            var s = format('%d', -0.567),
                e = '-0.567';
            expect(s).toEqual(e);
        });
    });

    describe('digit: none, octal', function () {
        it('positive, integer', function () {
            var s = format('%o', 10),
                e = '12';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%o', -50),
                e = '-62';
            expect(s).toEqual(e);
        });
    });

    describe('digit: none, hex', function () {
        it('positive, integer', function () {
            var s = format('%x', 10),
                e = 'a';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%x', -50),
                e = '-32';
            expect(s).toEqual(e);
        });
    });

    describe('digit: 4, decimal', function () {
        it('positive, integer', function () {
            var s = format('%4d', 10),
                e = '  10';
            expect(s).toEqual(e);
        });

        it('positive, float', function () {
            var s = format('%4d', 1.23),
                e = '1.23';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%4d', -50),
                e = ' -50';
            expect(s).toEqual(e);
        });

        it('negative, float', function () {
            var s = format('%4d', -0.567),
                e = '-0.567';
            expect(s).toEqual(e);
        });
    });

    describe('digit: 4, octal', function () {
        it('positive, integer', function () {
            var s = format('%4o', 10),
                e = '  12';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%4o', -50),
                e = ' -62';
            expect(s).toEqual(e);
        });
    });

    describe('digit: 4, hex', function () {
        it('positive, integer', function () {
            var s = format('%4x', 10),
                e = '   a';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%4x', -50),
                e = ' -32';
            expect(s).toEqual(e);
        });
    });

    describe('digit: -4, decimal', function () {
        it('positive, integer', function () {
            var s = format('%-4d', 10),
                e = '10  ';
            expect(s).toEqual(e);
        });

        it('positive, float', function () {
            var s = format('%-4d', 1.23),
                e = '1.23';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%-4d', -50),
                e = '-50 ';
            expect(s).toEqual(e);
        });

        it('negative, float', function () {
            var s = format('%-4d', -0.567),
                e = '-0.567';
            expect(s).toEqual(e);
        });
    });

    describe('digit: -4, octal', function () {
        it('positive, integer', function () {
            var s = format('%-4o', 10),
                e = '12  ';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%-4o', -50),
                e = '-62 ';
            expect(s).toEqual(e);
        });
    });

    describe('digit: -4, hex', function () {
        it('positive, integer', function () {
            var s = format('%-4x', 10),
                e = 'a   ';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%-4x', -50),
                e = '-32 ';
            expect(s).toEqual(e);
        });
    });

    describe('digit: 04, decimal', function () {
        it('positive, integer', function () {
            var s = format('%04d', 10),
                e = '0010';
            expect(s).toEqual(e);
        });

        it('positive, float', function () {
            var s = format('%04d', 1.23),
                e = '1.23';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%04d', -50),
                e = '-050';
            expect(s).toEqual(e);
        });

        it('negative, float', function () {
            var s = format('%04d', -0.567),
                e = '-0.567';
            expect(s).toEqual(e);
        });
    });

    describe('digit: 04, octal', function () {
        it('positive, integer', function () {
            var s = format('%04o', 10),
                e = '0012';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%04o', -50),
                e = '-062';
            expect(s).toEqual(e);
        });
    });

    describe('digit: 04, hex', function () {
        it('positive, integer', function () {
            var s = format('%04x', 10),
                e = '000a';
            expect(s).toEqual(e);
        });

        it('negative, integer', function () {
            var s = format('%04x', -50),
                e = '-032';
            expect(s).toEqual(e);
        });
    });

    describe('string', function () {
        it('digit: none', function () {
            var s = format('%s', 'foo'),
                e = 'foo';
            expect(s).toEqual(e);
        });

        it('digit: 8', function () {
            var s = format('%8s', 'foo'),
                e = '     foo';
            expect(s).toEqual(e);
        });

        it('digit: 8', function () {
            var s = format('%8s', 'foobarbaz'),
                e = 'foobarbaz';
            expect(s).toEqual(e);
        });

        it('digit: -8', function () {
            var s = format('%-8s', 'foo'),
                e = 'foo     ';
            expect(s).toEqual(e);
        });

        it('digit: -8', function () {
            var s = format('%-8s', 'foobarbaz'),
                e = 'foobarbaz';
            expect(s).toEqual(e);
        });

        it('digit: 08', function () {
            var s = format('%08s', 'foo'),
                e = '00000foo';
            expect(s).toEqual(e);
        });

        it('digit: 08', function () {
            var s = format('%08s', 'foobarbaz'),
                e = 'foobarbaz';
            expect(s).toEqual(e);
        });
    });

    describe('failed patterns', function () {
        it('invalid character', function () {
            var s = format('%S', 'foobarbaz'),
                e = '%S';
            expect(s).toEqual(e);
        });

        it('invalid character', function () {
            var s = format('%0s', 'foo'),
                e = '%0s';
            expect(s).toEqual(e);
        });

        it('absence', function () {
            var fn = function () {
                format('%s %s', 'foobarbaz');
            };
            expect(fn).toThrow();
        });

        it('excess', function () {
            var s = format('%s', 'foo', 'bar'),
                e = 'foo';
            expect(s).toEqual(e);
        });

        it('deferent type', function () {
            var s = format('%d', 'foo'),
                e = 'foo';
            expect(s).toEqual(e);
        });

        it('deferent type', function () {
            var s = format('%s', 10),
                e = '10';
            expect(s).toEqual(e);
        });

    });

    describe('% character', function () {
        it('%', function () {
            var s = format('%%s%s%%s', 'foo'),
                e = '%sfoo%s';
            expect(s).toEqual(e);
        });

        it('%', function () {
            var s = format('%%%%%%%%%%%%%%%%%%%%%-30d', -1),
                e = '%%%%%%%%%%-1                            ';
            expect(s).toEqual(e);
        });

        it('% to %', function () {
            var s = format('%s=%d %s=%o %s=%x', '%d', 100, '%o', 100, '%x', 100),
                e = '%d=100 %o=144 %x=64';
            expect(s).toEqual(e);
        });
    });

});
