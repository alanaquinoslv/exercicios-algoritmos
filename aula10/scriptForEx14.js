function grana() {
    div_msg.innerHTML = ''
    var qtdDepositos = Number (qtd_dep_input.value)
    var valorDeposito = Number(valor_dep_input.value)

    for (var cont = 1, mult = 1, final = (valorDeposito*mult); cont <= qtdDepositos; cont++, mult++) {
        
            div_msg.innerHTML += `${cont}º Mês: R$ ${valorDeposito*mult}<br>`

        }
        div_msg.innerHTML += `Total guardado: ${valorDeposito*qtdDepositos}`

}
