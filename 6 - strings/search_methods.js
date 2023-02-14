/* 

String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()

*/

let str = "Please locate where 'locate' occurs!";
// Segundo parâmetro: serve para definir índice de partida
// Diferença entre search e indexOf: search aceita regexp
console.log(str.indexOf("locate", 15));
console.log(str.search(/locate/));

// g (global) = busca tudo 
// i (insensitive) = desconsidera case sensitive
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);