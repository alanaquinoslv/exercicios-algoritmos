var bairro = [];

    function adicionar() {
        bairro.push(input_bairros.value)
        if (input_bairros.value == '') {
            alert(`Insira um bairro.`)
        }
        input_bairros.value = ''

    }

    function relembrar() {
        var pesquisa = Number(input_relembra.value)
        var index = pesquisa - 1

        if (input_relembra.value == '') {
            alert(`Insira um número para pesquisa.`)

        }
        else if (pesquisa <= bairro.length) {
            var bairroEncontrado = bairro[index]

            div_msg.innerText = `${bairroEncontrado}`
        }
        else if (pesquisa < bairro.length) {

            div_msg.innerText = `Você ainda não morou num bairro ${pesquisa}° bairro.`
        }
        else if (pesquisa > bairro.length) {
            div_msg.innerText = `Você ainda não morou num bairro ${pesquisa}° bairro.`
        }
    }