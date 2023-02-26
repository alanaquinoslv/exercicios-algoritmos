function calcular() {
    var ax_cobertura = ipt_cobertura.value
    var ax_valor = Number(ipt_valor_grama.value) 
    
    if (ax_cobertura != `c`) {
        ax_valor += 0.005
    }
    var ax_custo = ax_valor * ipt_peso_grama.value;
    
    if (ax_custo > 10) { 
        div_custo.innerHTML = `Esse sorvete vai comprometer a mesada, pois vai custar ${ax_custo} reais.`
        
    } 
    else { 
        div_custo.innerHTML = `Hoje você está maneirando.`
    }
    }