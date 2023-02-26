function lucro() {
    var ax_preco_compra = ipt_unitario.value;
    var ax_preco_venda = ax_preco_compra * 1.22;
    var ax_venda_total = ax_preco_venda * ipt_qtd.value;
    var ax_lucro_total = ipt_qtd.value * 1.22;
    var ax_tributado = ax_preco_venda + Number(1.25);
    

    div_lucro.innerHTML += `Comprando ${ipt_qtd.value} unidades de ${ipt_nome.value} a R$${ax_preco_compra} por unidade, você venderia a unidade por R$${ax_preco_venda.toFixed(2)} e o total da mercadoria por R$${ax_venda_total.toFixed(2)}, com lucro de ${ax_lucro_total.toFixed(2)}%. O valor tributado do produto é R$${ax_tributado.toFixed(2)}.`

}