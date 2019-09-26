// random number generator

var char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+"
];

var len = char.length;
var pass = [];

var product = document.getElementById('textgen');


function passGen(x) {
    for (var i = 0; i<x; i++) {
        var rindex = Math.floor(Math.random()*len);
        pass.push(char[rindex]);
        console.log(pass);
    }
    var password = pass.join('');
    return password;
}

function clickAction() {
    product.textContent = 'password'
}