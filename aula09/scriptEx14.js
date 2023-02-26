function verificar() {
    var idade = ipt_idade.value
    var contagem = 0

    while (contagem <= idade) {
        
        if (contagem <= 4) {
            span_msg.innerHTML += `<br> ${contagem} anos (Primeira Infância)`
        }

        else if (contagem <=6) {
            span_msg.innerHTML += `<br>${contagem} anos (Pré-escolar)`
        }

        else if (contagem <=10) {
            span_msg.innerHTML += `<br>${contagem} anos (Segunda Infância)`
        }
        
        else if (contagem <= 18) {
            span_msg.innerHTML += `<br>${contagem} anos (Adolescência)`
        }

        else if (contagem <= 50) {
            span_msg.innerHTML += `<br>${contagem} anos (Adulto)`
        }

        else if (contagem <= 100) {
            span_msg.innerHTML += `<br>${contagem} anos (Melhor idade)`
        }

        else if (contagem > 100) {
            span_msg.innerHTML += `<br>${contagem} anos (Matusalém)`
        }

        contagem ++
    }


}