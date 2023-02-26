function compra() {
    var valor = 3
    var quantidade = Number(ipt_qtd_compra.value)
    

    if (quantidade > 12) {
        valor = 2.5
        div_msg.innerHTML = `O valor da sua compra foi de R$${valor*quantidade.toFixed(2)}.`
    } 
    else {
        div_msg.innerHTML = `O valor da sua compra foi de R$${valor*quantidade.toFixed(2)}.`
    }

    
    
}