function nivel() {
    var ax_ep = Number(ipt_qtdep.value)
    var ax_total = ax_ep * 22
    var ax_hora_total = ax_total / 60

    div_msg.innerHTML = `Vejo que você gosta da série ${ipt_serie.value}.`

    if (ax_hora_total > 30) {
    div_msg.innerHTML += ` Uau, você realmente gosta dessa série.`

    }
    
}