let nome = "Antonio"

// Uso de `` permite a quebra de linha
let text =
`The quick
brown ${nome} fox
jumps over
the lazy dog`;
console.log(text)

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

console.log(html)