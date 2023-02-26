var filhos = [];

    function adicionar() {
   
        var i = 0
        var nome = filhos[i+1]

        if (input_filho.value == '') {
            alert(`Insira um nome.`)
        }
        else if (filhos.indexOf(input_filho.value) >= 0) {
            alert(`Não pode mais de 1 filho com o mesmo nome.`)
        }
        else {
            filhos.push(input_filho.value)
        }
        input_filho.value = ''
        console.log(filhos)
        console.log(filhos.indexOf(input_filho.value))
    }


    function verificar() {
        div_msg.innerHTML = ''
        if (filhos.length <= 0) {
            div_msg.innerHTML = ''
            alert(`Insira um nome antes.`)
        }
        else {
            var soma = 0
            div_msg.innerHTML = ''

            for (i = 0; i < filhos.length; i++) {

                input_filho.value = ''

                div_msg.innerHTML = `Você tem ${filhos.length} filhos. Seu custo mensal será aproximadamente R${(filhos.length * 3000).toFixed(2)} se eles estudarem em escola particular ou R$${(filhos.length * 1500).toFixed(2)} se eles estudarem em escola pública.`
            }
        }
        console.log(filhos)
    }
