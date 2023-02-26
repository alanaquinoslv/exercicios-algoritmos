function rotina() {
    var dias = Number(ipt_dias.value)
    var contagem_dias = 0

    while (contagem_dias < 30) {

        if (contagem_dias % dias == 0) {
            span_msg.innerHTML += `<br> Dia ${++contagem_dias} - Musculação`      
            
        }

        else {
            span_msg.innerHTML += `<br> Dia ${++contagem_dias} - Comer, dormir`
        }

    }
}