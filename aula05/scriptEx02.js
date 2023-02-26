function classe() {
    var ax_renda_familiar = Number(ipt_renda.value)
    var ax_classe = ''

    if (ax_renda_familiar <= 250) {
        ax_classe = `classe E`
    }

    else if (ax_renda_familiar <= 900) {
        ax_classe = `classe D`
    }

    else if (ax_renda_familiar <= 2500) {
        ax_classe = `classe C`
    }

    else if (ax_renda_familiar <= 9500) {
        ax_classe = `classe B`
    }

    else {
        ax_classe = `classe A`
    }

    div_msg.innerHTML = `${ax_classe}`

}