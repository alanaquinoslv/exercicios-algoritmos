function calculo() {
    var ax_qtde = ipt_qtde_mes.value;
    var ax_valor = Number(ipt_qtde_mes.value) * 0.85;


    if (ax_qtde < 100) {
        ax_valor *= 0.9;
    }


    alert(`O valor da conta é de ${ax_valor.toFixed(2)} reais.`)
}