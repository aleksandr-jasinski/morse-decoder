const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decimacia(k) {
  k = k.replace(/\./g,10).replace(/-/g,11);
  k = k.padStart(10,0);
  return k;
}

let morseTable = new Map(Object.entries(MORSE_TABLE));
let morseTableM = new Map;
for (let [key, value] of morseTable.entries()) {
  morseTableM.set(decimacia(key), value);
}
morseTableM.set('**********',' ');

function decode(expr) {
    // write your solution here
  let len = expr.length / 10;
  var encodedExprA = [];

  for (let i = 0, begin = 0, end = 10; i < len; i++ , begin += 10, end += 10) {
    encodedExprA.push(expr.slice(begin, end));
  }

  let decodedExprA = [];

  encodedExprA.forEach(function (element) {
    for (let [key, value] of morseTableM.entries()) {
      if (element === key) {
        decodedExprA.push(value);
      }
    }
  });

  let decodedExpr = decodedExprA.join('');
return decodedExpr;
}

module.exports = {
    decode
}