function analise() {
    var numUm = Number(ipt_primeiro.value)
    var numDois = Number(ipt_segundo.value)
    var contador = 0
    var numerosDiv = 0
    var numeroNaoDiv = 0

    if ((Number.isNaN(numUm)) || (Number.isNaN(numDois))) {
        alert (`Insira um número.`)
    }

    else if (numUm <= 0) {
        alert(`O primeiro número não pode ser zero ou menor`)
        ipt_primeiro.value = ''
    }
    else if (numDois <= numUm) {
        alert(`O segundo número precisa ser maior que o primeiro`)
        ipt_segundo.value = ''
    }

    else {
        tratamento()
    }

    function tratamento() {
        contador = numUm

        while (contador <= numDois) {
            if (contador % 2 == 0) {
                div.innerHTML += `O número ${contador} é divisível por 2.`
                
            }
            if (contador % 3 == 0) {
                div.innerHTML += `O número ${contador} é divisível por 3.`
                
            }
            if (contador % 5 == 0) {
                div.innerHTML += `O número ${contador} é divisível por 5.`
                
            }
            if (contador % 7 == 0) {
                div.innerHTML += `O número ${contador} é divisível por 7.`
                
            }
            if (contador % 11 == 0) {
                div.innerHTML += `O número ${contador} é divisível por 11.`
                
            }
            if (contador % 13 == 0) {
                div.innerHTML += `O número ${contador} é divisível por 13.`
                
            }
            if (contador % 2 != 0 && contador %3 != 0 && contador % 5 && contador % 7 != 0 && contador % 11 != 0 && contador % 13 !=0) {
                div.innerHTML += `O número ${contador} não é divisível pelos principais números primos. <br>`
                numeroNaoDiv++
            }

            div.innerHTML += `<br>`
            contador++
            numerosDiv++
        }

        div.innerHTML += `<br> O intervalo de ${numUm} a ${numDois} tem ${numDois-numUm} números sendo que ${numerosDiv - numeroNaoDiv} são divisíveis por algum número primo.`

    }

}