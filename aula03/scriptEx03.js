function calculo() {
    var ax_taxa = ipt_valor_vista.value * ipt_taxa_juros /100;
    var ax_valor_final = ax_taxa / ipt_valor_vista.value  
    var ax_valor_vista = ax_taxa / 100;
    var ax_carros = ax_valor_final / ax_valor_vista;

    div_preju.innerHTML = `Seu carro vai sair por um total de R$${ax_valor_final.toFixed(2)}. Após 1 mês, ele vai valer só R$${ax_valor_vista.toFixed(2)}. Por ter comprado financiado, vai pagar o equivalente a ${ax_carros.toFixed(1)}.`
    }