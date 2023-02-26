function contar() {
    var limiteInf = Number(inf_input.value)
    var limiteSup = Number(sup_input.value)
    var divisivel = Number(div_input.value)

    div_msg.innerHTML = ''

    if (limiteInf <= 1) {
        alert(`O número inferior precisa ser maior que 1`)
    }
    else if (limiteSup >= 100) {
        alert(`O número superior precisa ser menor que 100`)
    }
    else if (limiteSup <= limiteInf) {
        alert(`O número superior precisa ser maior que o inferior`)
    }
    else if (divisivel < 3 || divisivel > 10) {
        alert(`O número para teste precisa estar entre 3 e 10`)
    }
    else {
        for (let cont = limiteInf; cont <= limiteSup; cont++) {

            if (cont % divisivel == 0) {
                div_msg.innerHTML += `${cont}<br>`
            }

        }
    }

}