var produtos = [];

function adicionar() {
    produtos.push(Number(input_preco.value))

    if (input_preco.value == '') {
        alert(`Insira um valor.`)
    }
    input_preco.value = ''
    console.log(produtos)
}


function verificar() {
    div_msg.innerHTML = ''
    if (produtos.length <= 0) {
        div_msg.innerHTML = ''
        alert(`Insira um valor antes.`)
    }
    else {
        var soma = 0
        div_msg.innerHTML = ''

        for (var i = 0; i < produtos.length; i++) {
            soma += produtos[i];
            input_preco.value = ''

            div_msg.innerHTML = `Você tem ${produtos.length} produtos cadastrados em seu estoque. <br> Seu estoque vale R$${soma.toFixed(2)}`
        }
    }
    console.log(soma)
}