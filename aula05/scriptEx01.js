function calculo() {
    var ax_altura = ipt_altura.value
    var ax_esporte = ''

    if (ax_altura < 1.65) {
        ax_esporte = `piloto de corrida`
    } else if (ax_altura <=1.80) {
        ax_esporte = `jogador de futebol`
    } else {
        ax_esporte = `jogador de basquete`
    } 

    div_msg.innerHTML = `Você pode ser ${ax_esporte}!`
        
    
}