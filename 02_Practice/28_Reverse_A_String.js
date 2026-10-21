let sname = "Playwright";
let revName = "";
let nameLength = sname.length;
console.log(nameLength);

for (let index = nameLength - 1; index >= 0; index--) {
    revName = revName + sname.charAt(index);

}
console.log(revName);
