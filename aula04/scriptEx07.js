function conta() {
    var saldo = Number(ipt_saldo.value)
    var debito = Number(ipt_debito.value)
    var novo_saldo = saldo - debito
  
    if (novo_saldo < 0) {
    span_msg.innerHTML = `<b style="color: red;">O saldo atual da conta corrente é R$${novo_saldo.toFixed(2)}</b>`  
    } 
    
    else {
      span_msg.innerHTML = `O saldo atual da conta corrente é R$${novo_saldo.toFixed(2)}`  
    }
  
  
  }