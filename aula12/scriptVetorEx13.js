var campanhas = [];

    function registra() {
        campanhas.push(campanha.value)
        div_msg.innerHTML = ''

        var contVitorias = 0
        var contEmpates = 0
        var contDerrotas = 0

        for (let i = 0; i < campanhas.length; i++) {

            if (campanhas[i] == 'vitoria') {
                contVitorias++
            }
            if (campanhas[i] == 'empate') {
                contEmpates++
            }
            if (campanhas[i] == 'derrota') {
                contDerrotas++
            }

            div_msg.innerHTML = `O time teve ${contVitorias} vitórias, ${contEmpates} empates e ${contDerrotas} derrotas. <br> `
        }

        var pontos = (contVitorias * 3) + (contEmpates * 1)
        var aproveitamento = pontos / (campanhas.length * 3) * 100

        div_msg.innerHTML += `Pontuação total: ${pontos} <br> Aproveitamento: ${aproveitamento.toFixed(1)}% `

        console.log(campanhas)
    }


    function verificar() {

        var jogo = 0

        jogo = Number(pesquisa.value)

        var status = ''

        if (campanhas[jogo - 1] == 'vitoria') {
            status = 'ganhou'
        }
        if (campanhas[jogo - 1] == 'empate') {
            status = 'empatou'
        }
        if (campanhas[jogo - 1] == 'derrota') {
            status = 'perdeu'
        }

        if (pesquisa.value == '') {
            div_msg2.innerHTML =   ''
        }
        else if (jogo > campanhas.length) {
            div_msg2.innerHTML = `Não foi cadastrado um ${jogo}º jogo.`
        }
        else {
            div_msg2.innerHTML = `<br> No ${[jogo]}º jogo o time ${status} `
        }
    }
