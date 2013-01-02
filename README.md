# Format.js
Format.js is a simple JavaScript format function, like a Java String.format.  
It works in Chrome, Firefox, Safari, Safari, Opera, and IE 6.0+.

## Usage
### String
`%s`

    var s = format('%s world.', 'Hello');
    console.log(s);     // 'Hello world.'

`%8s` (Left padding)

    var s = format('%8s world.', 'Hello');
    console.log(s);     // '   Hello world.'

`%-8s` (Right padding)  

    var s = format('%-8s world.', 'Hello');
    console.log(s);     // 'Hello    world.'

### Number
`%d`

    var s = format('%d billion people.', 7.062);
    console.log(s);     // '7.062 billion people.'

`%5d` (Left padding)

    var s = format('%5d billion people.', 7);
    console.log(s);     // '    7 billion people.'

`%-5d` (Right padding)

    var s = format('%-5d billion people.', 7);
    console.log(s);     // '7     billion people.'

`%03d` (Zero padding)

    var s = format('%03d billion people.', 7);
    console.log(s);     // '007 billion people.'

`%o` (Octal notation)

    var s = format('0%o', 100);
    console.log(s);     // '0144'

`%x` (Hex notation)

    var s = format('0x%x', 255);
    console.log(s);     // '0xff'

### Escape
`%%d`

    var s = format('%%d to %d', 100);
    console.log(s);     // '%d to 100'

## License
Format.js is available under the terms of the MIT license.
