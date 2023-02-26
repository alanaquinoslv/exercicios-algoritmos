var preco = 0.00
    function calculo() {
       preco = Number(sel_ingredienteUm.value) + Number(sel_ingredienteDois.value) + Number(sel_ingredienteTres.value)
        mostrar()
    }

    function mostrar() {
        div_msg.innerHTML = `<br><b><u>A pizza de ${ipt_sabor.value} vai custar um total de R$${preco.toFixed(2)}</u></b>`
    }