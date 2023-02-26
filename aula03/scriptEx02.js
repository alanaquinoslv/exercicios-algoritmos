function contabil() {
    var ax_saldo_anterior = Number(ipt_saldo_anterior.value);
    var ax_saldo_final = (ax_saldo_anterior + Number(ipt_valor_credito.value)) - Number(ipt_valor_debito.value);
    var ax_diferenca = ax_saldo_final - ax_saldo_anterior;
    var ax_proporcao = ax_saldo_final / ax_saldo_anterior * 100;
    var ax_movimentacao = Number(ipt_valor_credito.value) - Number(ipt_valor_debito.value);

    div_contabil.innerHTML = `Seu saldo anterior era de R$${ax_saldo_anterior}. Seu saldo final é R$${ax_saldo_final.toFixed(2)}, e sua movimentação de R$${ax_movimentacao.toFixed(2)}. A diferença do saldo anterior é de R$${ax_diferenca.toFixed(2)}, com a poroporção entre os saldos de R$${ax_proporcao.toFixed(2)}.`

    ipt_saldo_anterior.value = '';
    ipt_valor_debito.value = '';
    ipt_valor_credito.value = '';

}