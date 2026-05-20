/*1. Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
2. Subsequent characters can include digits (0-9) in addition to the above
3. Cannot be a reserved keyword (if, return, class, etc.)
4. Are case-sensitive (foo ≠ Foo)
5. Can contain Unicode letters (e.g., résumé, Π)
Examples: $count, _private, myVar2, π — all valid.  
Invalid: 2fast, my-var, class. */
var $ =10;
var v_ =12;
let var12=143;
console.log(var12 + $);//143+10=153
