let text = "Hi Welcome";
console.log("Text Before reverse  :", text);
let textSize = text.length;//10
console.log("TextSize :", textSize);
let rev = '';
for (let index = textSize - 1; index >= 0; index--) {
    rev = rev + text[index];
}
console.log("Text After reverse  :", rev);// emocleW iH