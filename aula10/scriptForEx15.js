function grana() {
    div_msg.innerHTML = ''
    var qtdDepositos = Number(qtd_dep_input.value)
    var valorDeposito = Number(valor_dep_input.value)
    var juros = 0
    var final = 0

    for (var cont = 1; cont <= qtdDepositos; cont++) {

        final += valorDeposito
        juros = final * 1.01 - final

        if (cont % 3 == 0) {
            final += juros
            div_msg.innerHTML += `${cont}º Mês: R$ ${final}<br>`
        }
        else {

            div_msg.innerHTML += `${cont}º Mês: R$ ${final}<br>`
        }

    }
    div_msg.innerHTML += `Total guardado: ${final}`

}