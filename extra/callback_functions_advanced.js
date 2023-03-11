// Isso aqui vai demorar, o programa continua lá em baixo
// enquanto processa o download (4seg)
function baixaArquivoDaNet(url, funcaoCallback) {
  console.log("Baixando arquivos da URL " + url + " ...")
  setTimeout(funcaoCallback, 4000)
}

// Essa parte (função callback) só vai ser executada depois
// que toda a parte de download da outra função terminar
baixaArquivoDaNet('www.megaupload.com/videoLegal', function enviaArquivo() {  
  console.log("Você enviou o arquivo videoLegal.mp4")
})

// Isso é o ponto principal, o fluxo do programa continua
// acontecendo
console.log("Programa continua aqui")