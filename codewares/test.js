// https://www.codewars.com/kata/decimal-to-any-rational-or-irrational-base-converter/train/javascript
//function converter(number, decimals=0, base=Math.PI){
function converter(number, decimals = 0, base = Math.PI) {
    let n = Math.abs(number);
    let i = 0;
    while (Math.pow(base, i) <= n) { i++; }
    let r = ""
    for (let j = i - 1; j > -1; j--) {
        de = Math.pow(base, j);
        d = Math.floor(n / de);
        r = r + (d > 9 ? String.fromCharCode(65 + d - 10) : d);
        n -= d * de
    }
    r = (r == "" ? "0" : r);
    r = (number < 0 ? "-" : "") + r + (decimals > 0 ? "." : "");
    let k = -1;
    for (let l = 0; l < decimals; l++) {
        de = Math.pow(base, k);
        d = Math.floor(n / de);
        r = r + (d > 9 ? String.fromCharCode(65 + d - 10) : d);
        n -= d * de;
        k--;
    }
    return r;
}

console.log(converter(0, 0, 19) + " - Expected: '0'");
console.log(converter(0, 10, 22) + " - Expected: '0.0000000000'");
console.log(converter(-697059, 0, 17) + " - Expected: '-85EG8'");
// It should convert -697059 into base 17 and using 0 decimals - Expected: '-85EG8', instead got: '-85EG8.00'
// It should convert 326935 into base 36 and using 0 decimals - Expected: '709J', instead got: '709J.0000'
// It should convert -725237 into base 34 and using 0 decimals - Expected: '-IFCH', instead got: '-IFCH.0'
// It should convert -957695 into base 7 and using 4 decimals - Expected: '-11066054.0000', instead got: '-11066054'
// It should convert 133333 into base 28 and using 0 decimals - Expected: '621P', instead got: '621P.0000'


// It should convert 0 into base 19 and using 0 decimals - Expected: '0', instead got: '243D1.0000'
// It should convert 0 into base 22 and using 10 decimals - Expected: '0.0000000000', instead got: 'AJCA'
// It should convert 0 into base 15 and using 0 decimals - Expected: '0', instead got: '-29C67.000'
// It should convert 0 into base 35 and using 0 decimals - Expected: '0', instead got: '2B5O.00'
// It should convert 0 into base 15 and using 0 decimals - Expected: '0', instead got: '67E20.00'
// It should convert 0 into base 2 and using 1 decimals - Expected: '0.0', instead got: '10000101000011110111'
// It should convert 0 into base 35 and using 0