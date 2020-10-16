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

function decode(expr) {
    let result = '';
    if (expr.length % 10 === 0) {
        for (let i = 0; i < expr.length; i += 10) {
            let str = expr.slice(i, i + 10);
            if (str === '**********') {
                result += ' ';
                continue;
            }
            let letter = '';
            for (j = 0; j < str.length; j += 2) {
                if (str[j] === '1') {
                    if (str[j + 1] === '0') {
                        letter += '.';
                    }
                    else {
                        letter += '-';
                    }
                }
            }
            result += MORSE_TABLE[letter];
        }
    }

    return result;
}

module.exports = {
    decode
}