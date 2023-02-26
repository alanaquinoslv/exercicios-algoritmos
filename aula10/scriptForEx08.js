function contador() {
    var limite_inf = Number(ipt_inf.value)
    var limite_sup = Number(ipt_sup.value)

    if (limite_inf <= 1) {
        alert(`O limite inferior precisa ser maior que 1.`)
    }
    else if (limite_sup >= 100) {
        alert(`O limite superior precia ser menor que 100`)
    }
    else {

        div_msg.innerHTML = ''

        for (cont = limite_inf; cont <= limite_sup; cont++) {
            div_msg.innerHTML += `${cont}<br>`
        }
    }
}