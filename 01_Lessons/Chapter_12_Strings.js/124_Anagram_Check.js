function checkAnagram(word1, word2) {
    if (word1.length === word2.length) {
        let w1 = word1.toLowerCase().split("").sort().join("");
        let w2 = word2.toLowerCase().split("").sort().join("");
        if (w1 === w2) {
            console.log(word1 + " & " + word2 + " -> Anagram");

        } else {
            console.log(word1 + " & " + word2 + " -> Not an  Anagram");
        }

    } else {
        console.log("Size of both words not same ,It's not Anagrome ");

    }

}
checkAnagram("Tea", "Eat");//Tea & Eat -> Anagram
checkAnagram("Tea", "Net");//Tea & Net -> Not an  Anagram
checkAnagram("Abc", "Cbad");//Size of both words not same ,It's not Anagrome 
checkAnagram("aaa", "eat");//aaa & eat -> Not an  Anagram
