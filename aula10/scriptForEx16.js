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
            div_msg.innerHTML += `${cont}º Mês: R$ ${final.toFixed(2)}<img style="width: 12px;" src="https://i.pinimg.com/736x/f3/ed/fa/f3edfa3b4258829ce3ae68b35efd4d75.jpg" alt="star"> <br> `
        }
        else {

            div_msg.innerHTML += `${cont}º Mês: R$ ${final.toFixed(2)} <br>`
        }

    }
    div_msg.innerHTML += `Total guardado: ${final.toFixed(2)}`

}
