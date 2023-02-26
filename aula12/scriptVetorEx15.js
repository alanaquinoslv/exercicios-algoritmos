var produto = [];
var preco = [];

function registra() {
    var erro = true

    if (input_produto.value == "") {
        erro = false
        alert(`Insira um produto`);
    }
    if (input_preco.value == "") {
        erro = false
        alert(`Insira um preço`);
    }
    if (Number.isNaN(input_preco.value)) {
        erro = false
        alert(`Insira números`);
    }

    if (erro) {
        produto.push(input_produto.value);
        preco.push(Number(input_preco.value));

        div_msg.innerHTML = "";
        input_produto.value = "";
        input_preco.value = "";
        console.log(produto)
        console.log(preco)

    }
}



function verificar() {
    var maisCaro = 0
    var maisBarato = 99999999
    var somaCompra = 0
    var erro = true

    if (preco.length <= 0 || produto.length <= 0) {
        erro = false
        alert(`Cadastre um produto e preço.`)
    }

    if (erro) {
        div_msg.innerHTML = ''


        for (var i = 0; i < produto.length; i++) {
            somaCompra += preco[i]

            if (preco[i] > maisCaro) {
                maisCaro = i
            }
            if (preco[i] < maisBarato) {
                maisBarato = i
            }

            div_msg.innerHTML = `Total de produtos: ${produto.length}`
            div_msg2.innerHTML += `<br> Produto: ${[i + 1]}: ${produto[i]} `
            div_msg2.innerHTML += `<br> Preço de compra: R$${preco[i]}`
            div_msg2.innerHTML += `<br> Vender por R$${(preco[i] * 1.25).toFixed(2)} <br>`
        }
        div_msg2.innerHTML += `<br> Produto mais caro: ${produto[maisCaro]}`
        div_msg2.innerHTML += `<br> Produto mais barato: ${produto[maisBarato]}`
        div_msg2.innerHTML += `<br> Preço de compra total: R$${somaCompra}`
        div_msg2.innerHTML += `<br> Média preço de venda: R$${(somaCompra / preco.length).toFixed(2)}`
    }

}
