function calcular() {
    var ax_custo = ipt_valor_grama.value * ipt_peso_grama.value;

    if (ax_custo > 10) { 
        div_custo.innerHTML = `Esse sorvete vai comprometer a mesada.`
        
    } 
    else { 
        div_custo.innerHTML = `Hoje você está maneirando.`
    }
    }