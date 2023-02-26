function infectados_ontem() {
    var ax_numero_infectados = ipt_infectados_atual.value
    var ax_infectados_dia = Number(35)

    div_ontem.innerHTML = `<br> Ontem haviam ${ax_numero_infectados -= 35} infectados.`;
    }

function infectados_amanha() {
    var ax_numero_infectados = ipt_infectados_atual.value
    div_amanha.innerHTML = ` Amanhã a quantidade de pessoas infectadas será de ${Number(ax_numero_infectados) +35}.`;
    }

function infectados_mes() {
    var ax_numero_infectados = ipt_infectados_atual.value
    div_mes.innerHTML = `A quantidade de pessoas infectadas será de ${Number(ax_numero_infectados) + 35 * 30 }.`;
    
}
