var ax_preco = 0
    function preco() {
        if (sel_produtos.value == `bolacha`) {
            ax_preco = 3.00
        }
        else if (sel_produtos.value == `refrigerante`) {
            ax_preco = 9.00
        }
        else if (sel_produtos.value == `leite`) {
            ax_preco = 4.99
        }
        else if (sel_produtos.value == `fermento`) {
            ax_preco = 2.99
        }

        alert(`O produto ${sel_produtos.value} custa R$${ax_preco.toFixed(2)}`)
    }