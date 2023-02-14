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
console.log(str.indexOf("locate", 15));
// Diferença entre search e indexOf: search aceita regexp
console.log(str.search(/locate/));