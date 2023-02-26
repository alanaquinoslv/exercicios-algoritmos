var notasCem = 0
    var notasCinq = 0
    var notasDez = 0
    var resto = 0
    var faltou = 0
    var usarCem = 0
    var usarCinq = 0
    var saldo = 0
    var valorSaque = 0


    function iniciar() {
        notasCem = Number(ipt_qtdCem.value)
        notasCinq = Number(ipt_qtdCinq.value)
        notasDez = Number(ipt_qtdDez.value)
        saldo = (notasCem * 100) + (notasCinq * 50) + (notasDez * 10)
        div_notas.innerHTML = `<br> <h1> Há notas de R$100, R$50 e R$10 disponíveis. </h1>`

        div1.style.display = 'none'

    }

    function saque() {
        valorSaque = Number(ipt_saque.value)

        if (valorSaque <= 0) {
            alert(`Não é possível sacar 0 ou menos!`)
        }

        if (valorSaque > saldo) {
            alert(`Montante disponível não atende a solicitação.`)
        }

        if (valorSaque % 10 != 0) {
            alert(`Valor não é possível devido às notas disponíveis.`)
        }

        if (valorSaque > 0 && valorSaque <= saldo && valorSaque % 10 == 0) {

            resto = valorSaque % 100
            usarCem = Math.floor(valorSaque / 100)

            if (usarCem > notasCem) {
                faltou = usarCem - notasCem
                usarCem = notasCem
                resto = resto + (faltou * 100)
            }

            usarCinq = Math.floor(resto / 50)
            resto = resto % 50

            if (usarCinq > notasCinq) {
                faltou = usarCinq - notasCinq
                usarCinq = notasCinq
                resto = resto + (faltou * 50)
            }

            usarDez = Math.floor(resto / 10)

            if (usarDez > notasDez) {
                alert(`Solicitação não atendida devido a quantidade e valor das notas disponíveis.`)
            }

            else {
                notasCem = notasCem - usarCem
                notasCinq = notasCinq - usarCinq
                notasDez = notasDez - usarDez
                saldo -= valorSaque
                div_saque.innerHTML = `<h3> Retire o dinheiro no local indicado: <h3/> <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/22648_149C92422C50FBE5-1.jpg?w=876&h=484&crop=1" alt="banco">
 `



            }

        }
        div2.style.display = 'none'
    }