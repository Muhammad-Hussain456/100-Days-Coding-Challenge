/* Compare Strings:
Compare two strings to check if they are identical, ignoring case sensitivity.
*/

function compareStringsIgnoringCaseSensitivity(string1: string, string2: string){
   return string1.toLowerCase() === string2.toLowerCase();
}
console.log(compareStringsIgnoringCaseSensitivity("HUSSAIN", "hussain"));
console.log(compareStringsIgnoringCaseSensitivity("HUSSAIN", "ali"));