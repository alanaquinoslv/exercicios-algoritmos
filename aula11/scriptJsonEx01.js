function analise() {
    var time = {
        qtdvitorias: Number(input_vit.value),
        qtdderrotas: Number(input_der.value),
        qtdempates: Number(input_emp.value)
    }

    var derrota = 0
    var empate = 1
    var vitoria = 3

    div_msg.innerHTML += `Vitória: ${time.qtdvitorias*vitoria} pontos <br>`
    div_msg.innerHTML += `Empate: ${time.qtdempates*empate} pontos <br>`
    div_msg.innerHTML += `Vitória: ${derrota} pontos <br>`

}