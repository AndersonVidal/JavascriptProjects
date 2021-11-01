const pwEl = document.getElementById('pw');
const pwtxtEl = document.getElementById('pwtxt');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = upperLetters.toLowerCase();
const numbers = '0123456789';
const symbols = '!@#$%&*()_+-^~';

function getLowerCase(){
    return lowerLetters[
        Math.floor(Math.random() * lowerLetters.length)
    ];
}

function getUpperCase(){
    return upperLetters[
        Math.floor(Math.random() * upperLetters.length)
    ];
}

function getNumber(){
    return numbers[
        Math.floor(Math.random() * numbers.length)
    ];
}

function getSymbol(){
    return symbols[
        Math.floor(Math.random() * symbols.length)
    ];
}

function generateChar() {
    const chars = [];
    if (upperEl.checked) {
        chars.push(getUpperCase());
    }
    if (lowerEl.checked) {
        chars.push(getLowerCase());
    }
    if (numberEl.checked) {
        chars.push(getNumber());
    }
    if (symbolEl.checked) {
        chars.push(getSymbol());
    }

    if (chars.length === 0) return '';

    return chars[
        Math.floor(Math.random() * chars.length)
    ];
}

function generatePassword() {
    const len = lenEl.value;
    let password = '';

    for(let i=0; i<len; i++) {
        const char = generateChar();
        password += char;
    }

    pwtxtEl.innerHTML = password;
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const txtarea = document.createElement('textarea');
    const password = pwtxtEl.innerHTML;

    if (!password) return;

    txtarea.value = password;
    document.body.appendChild(txtarea);
    txtarea.select();
    document.execCommand('copy');
    txtarea.remove();
    alert('Password copied to clipboard');
})