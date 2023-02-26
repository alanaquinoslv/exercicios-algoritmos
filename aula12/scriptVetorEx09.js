var projetos = [];

    function adicionar() {
        projetos.push(input_projeto.value)

        if (input_projeto.value == '') {
            alert(`Insira um nome.`)
            div_msg.innerHTML = ''
        }
        input_projeto.value = ''


        if (projetos.length >= 0 && projetos.length <= 4) {
            div_msg.innerHTML += `Você já fez ${projetos.length}. Por isso você é um profissional júnior. <br>`
        }
        else if (projetos.length >= 5 && projetos.length <= 12) {
            div_msg.innerHTML += `Você já fez ${projetos.length}. Por isso você é um profissional pleno desde o ${projetos[4]} <br> `
        }
        else if (projetos.length >= 13) {
            div_msg.innerHTML += `Você já fez ${projetos.length}. Por isso você é um profissional sênior desde o ${projetos[12]} <br> `
        }
    }

    function verificar() {
        div_msg.innerHTML = ''
        if (projetos.length <= 0) {
            div_msg.innerHTML = ''
            alert(`Insira um um nome antes.`)
        }
        else {

            for (let i = projetos.length - 1; i >= 0; i--) {
                var nome = projetos[i]

                div_msg.innerHTML += `${nome} <br>`
            }
        }
    }
