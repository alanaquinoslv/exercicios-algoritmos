function multiplos() {
    var contador = 0
    var numero = Number(ipt_num.value)
    
    if (numero >0  && numero <=200) {
        
        while (contador < numero) {
            if (contador % 7 == 0) {
                div_msg.innerHTML += `<br> ${contador}`
            }
            contador++
        }

    } 
    
    else {
     alert(`Insira um número válido.`)   
    }

    
}