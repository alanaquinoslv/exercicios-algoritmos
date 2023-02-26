function semanal() {
    var ax_meses = ipt_meses.value
    var ax_gasto = ipt_gasto.value
    div_semanal.innerHTML = ax_gasto *=7;
}

function mensal() {
    var ax_meses = ipt_meses.value
    var ax_gasto = ipt_gasto.value
    div_mensal.innerHTML = (ax_gasto += 1200) * 30;
}

function total() {
    var ax_meses = ipt_meses.value
    var ax_gasto = ipt_gasto.value += Number(1200)

    div_total = `Ao final da obra será gasto ${ax_meses * ax_gasto}.`;
    }