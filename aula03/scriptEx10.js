function oito_passagens() {
    var ax_valor_desconto = 35.20 - 32.45
    var ax_porcentagem = ax_valor_desconto / 35.20 * 100
    var ax_ganho = ax_valor_desconto / 4.40
    
    div_desconto.innerHTML = `Ao comprar 8 passagens, você pagou ${ax_porcentagem.toFixed(1)}% a menos. É como se você tivesse ganhado ${ax_ganho.toFixed(1)} passagens de "bônus".`;
    }

function vinte_passagens() {
    var ax_valor_desconto = 88.00 - 78.65
    var ax_porcentagem = ax_valor_desconto / 88.00 * 100
    var ax_ganho = ax_valor_desconto / 4.40

    div_desconto.innerHTML = `Ao comprar 20 passagens, você pagou ${ax_porcentagem.toFixed(1)}% a menos. É como se você tivesse ganhado ${ax_ganho.toFixed(1)} passagens de "bônus".`;
    }

function cinquenta_passagens() {
    var ax_valor_desconto = 220.00 - 191.41
    var ax_porcentagem = ax_valor_desconto / 220.00 * 100
    var ax_ganho = ax_valor_desconto / 4.40

    div_desconto.innerHTML = `Ao comprar 50 passagens, você pagou ${ax_porcentagem.toFixed(1)}% a menos. É como se você tivesse ganhado ${ax_ganho.toFixed(1)} passagens de "bônus".`;
    }
    