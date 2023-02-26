function desempenho() {
    var nota1 = Number(ipt_primeira_nota.value)
    var nota2 = Number(ipt_segunda_nota.value)
    var nota3 = Number(ipt_terceira_nota.value)
    var media = (nota1 + nota2 + nota3) / 3 
    
    

    if (media > 9.4) {
        span_msg.innerHTML = `Sua média é de ${media.toFixed(1)}. Parabéns, você é fora de série!`
    } 
    
    else {
        span_msg.innerHTML = `Sua média é de ${media.toFixed(1)}`
    }


  }