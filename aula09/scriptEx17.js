function carona() {
    var capacidade_veiculo = ipt_qtd_pessoas.value
    var qtd_pessoas = ipt_entrada_pessoas.value
    var cont = 0


    while (cont <= capacidade_veiculo || cont > capacidade_veiculo && cont <= qtd_pessoas) {
      
        if (cont == 1) {
            span_msg.innerHTML += `<br> Entrou o ${cont}º passageiro (que é o motorista)`    
        }

        else if (cont > 1 && cont <= capacidade_veiculo) {
            span_msg.innerHTML += `<br> Entrou o ${cont}º passageiro`
        }

        else if (cont > capacidade_veiculo) {
            span_msg.innerHTML += `<br> O ${cont}º passageiro terá que esperar`
        } 

        
             
        cont ++
    }
}