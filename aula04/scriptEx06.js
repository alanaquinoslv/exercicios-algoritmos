function calcular() {
    var ax_renda = ipt_renda.value
    var ax_financiamento = Number(ipt_prestacao.value) / ax_renda * 100;

    div_msg.innerHTML = `A prestação corresponde a ${ax_financiamento.toFixed(0)}% da renda familiar.`;

    if (ax_financiamento > 30) {
        div_msg.innerHTML += `<br> Será necessário complementar a renda familiar.`
    }


}