// Iniciar nome da function com letra maiúscula p/ lembrar
// Diferença entre factory é que na constructor não se usa o return
// para fornecer os dados e é preciso usar o new para instanciar
function Computador(processador, memoria, ssd, gpu) {
    this.processador = processador
    this.memoria = memoria
    this.gpu = gpu
    this.ssd = ssd

    this.falaInfo = () => {
        console.log(`Este computador tem um processador ${this.processador}`)
    }
}

const meuPc = new Computador('AMD Ryzen 5600x', '16GB', '720GB', 'AMD RX460')
meuPc.falaInfo()