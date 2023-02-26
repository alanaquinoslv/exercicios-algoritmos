function amor() {
    var contador = 1
    var qtd_amor = ipt_amor.value
    var nome = ipt_nome.value

    while (contador <= qtd_amor) {

     
        div_msg.innerHTML += `${contador} - ${nome}, Eu te amo! <i>Sempre Lembre disso</i> <br>`
        contador++
}

}