function analise() {
    var faixa = ipt_faixa.value
    var qtdVitorias = Number(ipt_vitorias.value)
    var qtdDerrotas = Number(ipt_derrotas.value) 
    var qtdEmpates = Number(ipt_empates.value) 
    
    var ptsInicial = Number('')
    var ptsLuta = Number('')

    if (faixa == `branca`) {
        ptsInicial = Number(0)
        ptsLuta = Number(4)
    }

    else if (faixa == `azul`) {
        ptsInicial = Number(1000)
        ptsLuta = Number(10)
    }

    else if (faixa == `amarela`) {
        ptsInicial = Number(2000)
        ptsLuta = Number(30)
    }

    else if (faixa == `laranja`) {
        ptsInicial = Number(5000)
        ptsLuta = Number(60)
    }

    else if (faixa == `verde`) {
        ptsInicial = Number(10000)
        ptsLuta = Number(100)
    }

    else if (faixa == `roxa`) {
        ptsInicial = Number(15000)
        ptsLuta = Number(150)
    }

    else if (faixa == `marrom`) {
        ptsInicial = Number(25000)
        ptsLuta = Number(300)
    }

    else if (faixa == `preta`) {
        ptsInicial = Number(50000)
        ptsLuta = Number(500)
    }

    
    var totalLutas = qtdVitorias + qtdDerrotas + qtdEmpates 
    var ptsTotal = (qtdVitorias * ptsLuta) + (qtdEmpates*2) - (qtdDerrotas * ptsLuta /2) + ptsInicial
    var ganhoLuta = qtdVitorias * ptsLuta + (qtdEmpates*2)
    var pctInicial = ptsInicial / ptsTotal * 100
    var pctLuta = ganhoLuta / ptsTotal * 100
    var pctVitoria = qtdVitorias / totalLutas * 100
    var pctDerrotaEmpate = (qtdDerrotas + qtdEmpates) / totalLutas * 100
    var allWin = ptsLuta * totalLutas + ptsInicial
    var pctTotal = ptsTotal / allWin * 100

    div_msg.innerHTML = `${ipt_nome.value} da faixa ${faixa} tem ${ptsTotal}, sendo ${pctInicial.toFixed(2)}% dos pontos inciais da faixa e ${pctLuta.toFixed(2)}% conquistados em lutas.`

    div_msg.innerHTML += `<br> Se ${ipt_nome.value} tivesse vitória em todas as lutas ele teria ${allWin} pontos, hoje ele tem ${pctTotal.toFixed(2)}% do total.`

    div_msg.innerHTML += `<br> Total de lutas: ${totalLutas} sendo ${pctVitoria.toFixed(2)}% e ${pctDerrotaEmpate.toFixed(2)}% derrota ou empates.`


}