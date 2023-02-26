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
        if (isNaN(input_preco.value)) {
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
        var erro = true

        if (preco.length <= 0 || produto.length <= 0) {
            erro = false
            alert(`Cadastre um produto e preço.`)
        }

        if (erro) {
            div_msg.innerHTML = ''
            div_msg2.innerHTML = ''

            for (let i = 0; i < produto.length; i++) {
                
                div_msg.innerHTML = `Total de produtos: ${produto.length}`
                div_msg2.innerHTML += `<br> Produto: ${[i+1]}: ${produto[i]} `
                div_msg2.innerHTML += `<br> Preço de compra: R$${preco[i]} <br> Vender por R$${(preco[i] * 1.25).toFixed(2)} <br> `
                
            }
        }
      
    }