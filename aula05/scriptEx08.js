function calculo() {
    var ax_pao = Number(ipt_qtd_pao.value) * 50
    var ax_bolacha = Number(ipt_qtd_bolacha.value) * 80
    var ax_achoc = Number(ipt_qtd_achoc.value) * 70
    var ax_total = ax_pao + ax_bolacha + ax_achoc
    var ax_msg = ''

    if (ax_total < 200) {
        ax_msg = `Parabéns, vai sair em forma da quarentena!`
    }

    else if (ax_total <= 400) {
        ax_msg = `Cuidado, vai ficar mais fofinho(a) após a quarentena!`
    }

    else {
        ax_msg = `Bom, acho que muitos não vão te reconhecer após a quarentena`
    }

    div_msg.innerHTML = `${ax_msg}`

}