var destino = [];

    function adicionar() {
        destino.push(input_destinoViagem.value)
        input_destinoViagem.value = ''
    }

    function pesquisa1() {
        var pesquisa = Number(1)
        var index = pesquisa - 1

        if (pesquisa <= destino.length) {
            var destinoEncontrado = destino[index]
            div_msg.innerText = `Primeira viagem: ${destinoEncontrado} `
        }
        else {
            div_msg.innerText = `Ainda não viajou.`
        }
    }

    function pesquisa2() {
        var pesquisa = Number(3)
        var index = pesquisa - 1

        if (pesquisa <= destino.length) {
            var destinoEncontrado = destino[index]
            div_msg.innerText = `Terceira Viagem: ${destinoEncontrado} `
        }
        else if (destino.length < 3){
            div_msg.innerText = `Ainda não fez a terceira viagem.`
        }
    }

    function pesquisa3() {
        var pesquisa = Number(1)
        var index = pesquisa - 1

        if (pesquisa <= destino.length) {
            var destinoEncontrado = destino[index]
            destino[destino.length-1];
            div_msg.innerText = `Última viagem: ${destino[destino.length-1]} `
        }
        else {
            div_msg.innerText = `Ainda não viajou.`
        }
    }