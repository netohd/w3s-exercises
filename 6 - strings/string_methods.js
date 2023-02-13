/* 

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

*/

let firstText = "Please visit Microsoft!";
// O /i serve para ignorar o case sensitive da replace
let newText = firstText.replace(/MICROSOFT/i, "W3Schools");
console.log(newText)

let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

// Remove espaço dos lados (existe trimStart e trimEnd)
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2)