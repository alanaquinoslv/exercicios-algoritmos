function analise() {
    var ax_temperatura = ipt_temp.value

    if (ax_temperatura < 21 || ax_temperatura > 24) {
        alert(`Alerta de desconforto!`)
    }

    if (ax_temperatura < 21) {
        alert(`As pessoas vão ter hipotermia.`)
    }

    if (ax_temperatura > 24)
        alert(`As pessoas vão derreter.`)


}