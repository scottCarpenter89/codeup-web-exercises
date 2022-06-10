// Write a function called removeVowels.
//     Takes a parameter called originalString.
//     Returns a string that is based on the originalString but with all of the vowels removed.
//     Do not modify originalString.
//
//     Provide a main or equivalent where you can test your function and output the result.
//
//     Examples
// removeVowels("aeiou") -> ""
// removeVowels("happy dog") -> "hppy dg"
// removeVowels("") -> ""

// function removeVowels(originalString) {
//     let vowels = [];
//     let result = originalString.substr(0, originalString.length);
//     if (originalString === 0) {
//         return result;
//     }
//
//     for (let i = 0; i < result.length; i++) {
//         if (originalString[i] === "a" || originalString === "e" || originalString === "i" || originalString === 'o' || originalString === 'u' || originalString === 'y') {
//            vowels = result.push(result[i]);
//         }
//
//     }
//     return result;
// }
//
// removeVowels("aeiou");
removeVowels("happy dog");
removeVowels("");