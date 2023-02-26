function pizza() {
    var valor = Number(ipt_valor.value)
    var amigos = Number(ipt_qtd_amigos.value)
    var pagar = valor / amigos 
  
    if (pagar > 20.00) {
      span_msg.innerHTML = `Deu ruim! Pizza muito cara.`
    } 
    else {
      span_msg.innerHTML = `Cada amigo vai pagar R$${pagar.toFixed(2)} pela pizza.`
    }
  }