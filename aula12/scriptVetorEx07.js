var filmes = [];

function adicionar() {
    filmes.push(input_filmes.value)

    if (input_filmes.value == '') {
        alert(`Insira um filme.`)
        div_msg.innerHTML = ''
    }
    else {
        verificar()
    }

    input_filmes.value = ''
}



function verificar() {
    div_msg.innerHTML = ''
    if (filmes.length <= 0) {
        div_msg.innerHTML = ''
        alert(`Insira um filme antes.`)
    }
    else {
        var pesquisa = Number(1)
        var index = pesquisa - 1

        for (let index = 0; index < filmes.length; index++) {

            if (index % 2 != 0) {

                div_msg.innerHTML += `<b style="color:red;">${filmes[index]} </b> <br>`
            }
            else if (index % 2 == 0) {
                div_msg.innerHTML += `<b style="color:blue;">${filmes[index]} </b> <br>`
            }
        }
    }
}