function refri() {
    var qtd_refri = Number(ipt_qtd.value * 365)

    div_msg.innerHTML = `Você bebe por ano ${qtd_refri} latas de refrigerante.`

    if (qtd_refri >= 500) {
       div_msg.innerHTML += `<br>Cuidado com a diabetes!`
    } 


}