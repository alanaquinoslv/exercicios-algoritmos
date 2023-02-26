function corrida() {
    var contador = 1
    var voltas = Number(ipt_voltas.value)
    
    while (contador <= voltas) {
        div_msg.innerHTML += `Carro dando a ${contador++}ª volta... <BR>`
    }
    div_msg.innerHTML += `<br> Corrida Finalizada!`



}