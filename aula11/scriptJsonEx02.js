function analise() {
    var nomeTimeUm = input_time_um.value
    var nomeTimeDois = input_time_dois.value


    var time1 = {
        qtdvitorias: Number(input_vit_time_um.value),
        qtdderrotas: Number(input_der_time_um.value),
        qtdempates: Number(input_emp_time_um.value)
    }

    var time2 = {
        qtdvitorias: Number(input_vit_time_dois.value),
        qtdderrotas: Number(input_der_time_dois.value),
        qtdempates: Number(input_emp_time_dois.value)
    }

    var derrota = 0
    var empate = 1
    var vitoria = 3

    div_msg.innerHTML += `O time ${nomeTimeUm} terminou o campeonato com  ${(time1.qtdvitorias * vitoria) + (time1.qtdempates * empate)} pontos <br>` 

    div_msg.innerHTML += `O time ${nomeTimeDois} terminou o campeonato com  ${(time2.qtdvitorias * vitoria) + (time2.qtdempates * empate)} pontos <br>` 

}