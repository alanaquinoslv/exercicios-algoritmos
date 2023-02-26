function calculo() {
    var ax_valor = Number(ipt_valor_grama.value);
    var ax_cobertura = ipt_cobertura.value;
    var ax_tipo = ipt_tipo_sorvete.value;
    var ax_peso = Number(ipt_grama.value);

    if (ax_cobertura != `c`) {
        ax_valor += 0.01;
    }
    
    var ax_custo = ax_valor * ax_peso;

    if (ax_tipo != `g`) {
        ax_custo *= 0.9;
        
    } 
    else {
        ax_custo *= 1.11;
        
    }

    if (ax_custo > 10.00) {

        div_msg.innerHTML = `O seu sorvete vai custar R$${ax_custo.toFixed(2)} e vai comprometer a mesada.`

    }
    else {
        div_msg.innerHTML = `Hoje você está maneirando, gastou somente R$${ax_custo.toFixed(2)}.`
    }



}