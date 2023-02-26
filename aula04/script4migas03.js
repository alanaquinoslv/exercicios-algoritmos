function calcular() {
    var ax_tipo_sorvete = ipt_sorvete.value
    var ax_valor = Number(ipt_valor_grama.value)

    if (ax_tipo_sorvete != `g`) {
        ax_valor *= 0.7
    }
    var ax_custo = ax_valor * ipt_peso_grama.value;

    if (ax_tipo_sorvete = `g`) {
        ax_valor *= 1.10
        }
    var ax_custo = ax_valor * ipt_peso_grama.value;

    if (ax_custo > 10) { 
            div_custo.innerHTML = `Esse sorvete vai comprometer a mesada, pois vai custar ${ax_custo.toFixed(2)} reais.`
            
        } 
        else { 
            div_custo.innerHTML = `Hoje você está maneirando.`
        }
        

    
}