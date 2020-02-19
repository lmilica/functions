// function isAString(words) {
//     if (typeof words === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isAString("bit"));

// function isAStringIsBlank(blank) {
//     if (blank === "" || blank === " ") {
//         return true;

//     } else {
//         return false;
//     }
// }
// console.log(isAStringIsBlank("juo"));

// function concatenate(text, times) {
//     var res = "";

//     for (var i = 0; i < times; i++) {
//         res += text;
//     }

//     return res;
// }
// console.log(concatenate("Abc", 3));

function numberOfLetter(letter, text) {
    var res = 0;

    for (i = 0; i < text; i++) {
        res += letter;

    }
    return res;
}
console.log(numberOfLetter("n", "my random string"));
