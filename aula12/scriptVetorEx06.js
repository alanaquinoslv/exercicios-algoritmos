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

            if (pesquisa <= filmes.length) {
                var filmeEncontrado = filmes[index]

                div_msg.innerHTML += `${filmeEncontrado} <br>`
            }
        }
    }

}
