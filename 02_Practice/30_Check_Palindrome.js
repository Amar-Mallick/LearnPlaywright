function isPalindromeShort(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

// Test cases
console.log(isPalindromeShort("madam")); // true
console.log(isPalindromeShort("world")); // false