
function checkPalindrome(name) {
    let rev = "";
    for (let i = name.length - 1; i >= 0; i--) {
        rev = rev + name[i];
    }
    if (name.toLowerCase() === rev.toLowerCase()) {
        console.log(name + " ->Its a Palindrome");
    } else {
        console.log(name + " ->Its not a Palindrome");
    }
}
checkPalindrome("Pramod");//Pramod->Its not a Palindrome
checkPalindrome("Madam");//Madam->Its a Palindrome