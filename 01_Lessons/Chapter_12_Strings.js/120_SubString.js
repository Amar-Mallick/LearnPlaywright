/**substring()-># Returns the substring at the specified location within a String object.
 * #  index starts from 0 & 
 * The second argument is the index where the extraction stops (it is exclusive).
 *  This means the character at the end index is not included.
 */
let str = "Login- Test 003";
//substring():- not support negatative arguments ,return zero.
console.log(str.substring(7, 11));//Test
//Slice()->>>>>
console.log(str.slice(7, 11));//Test
console.log(str.slice(-1));//3

