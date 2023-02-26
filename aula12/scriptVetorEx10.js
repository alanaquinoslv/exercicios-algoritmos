var onibus = [];

    function adicionar() {
        onibus.push(input_onibus.value)

        if (input_onibus.value == '') {
            alert(`Insira um nome.`)

            input_onibus.value = ''
        }
        else {
            div_msg.innerHTML = ''
            for (let i = onibus.length - 1; i >= 0; i--) {
                var nome = onibus[i]

                div_msg.innerHTML += `${nome} <br>`
                input_onibus.value = ''
            }
        }
        console.log(onibus)
    }


    function verificar() {
        div_msg.innerHTML = ''
        if (onibus.length <= 0) {
            div_msg.innerHTML = ''
            alert(`Insira um um nome antes.`)
        }
        else if (input_pesquisa.value == '') {
            alert(`Insira um nome.`)
            input_pesquisa.value = ''
        }
        else {
            var pesquisa = input_pesquisa.value
            var cont =
                div_msg.innerHTML = ''

            for (var i = 0; i < onibus.length; i++) {
                var nome = onibus[i]
                input_onibus.value = ''

                if (onibus[i] == pesquisa) {
                    cont++
                    div_msg.innerHTML = `Você já pegou essa linha ${cont} vezes, nessa ordem:`
                    div_msg2.innerHTML += `${i + 1}, `

                }
                else if (cont == 0) {
                    div_msg.innerHTML = 'Você nunca pegou essa linha.'
                    div_msg2.innerHTML = ''
                }
            }

        }

        console.log(onibus.indexOf(input_pesquisa.value))
    }