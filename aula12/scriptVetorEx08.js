var alunos = [];

    function adicionar() {
        alunos.push(input_aluno.value)

        if (input_aluno.value == '') {
            alert(`Insira um nome.`)
            div_msg.innerHTML = ''
        }

        input_aluno.value = ''

        console.log(alunos.length)

    }

    function verificar() {
        div_msg.innerHTML = ''
        if (alunos.length <= 0) {
            div_msg.innerHTML = ''
            alert(`Insira um um nome antes.`)
        }
        else {

            for (let i = alunos.length - 1; i >= 0; i--) {
                var nome = alunos[i]

                div_msg.innerHTML += `${nome} <br> `
            }
        }
    }
