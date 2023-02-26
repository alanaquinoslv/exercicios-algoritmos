function cansa() {
    var ax_dist = ipt_km.value
    var transporte = sel_tp.value

    if (ax_dist <= 10) {
        if (transporte == 1 || transporte == 2 || transporte == 3) {
            alert(`Tá tranks!`)
        }
        else {
            alert(`É... Um pouco cansado.`)
        }
    }

    else {
        if (transporte == 3) {
            alert(`É... Um pouco cansado.`)
        }

        else if (transporte == 1 || transporte == 2) {
            alert(`Bem cansado.`)
        }

        else {
            alert(`Tá só o pó.`)
        }



    }
}