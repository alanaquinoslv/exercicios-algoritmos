function multiplos() {
    var contador = 0
    var numero = Number(ipt_num.value)
    
    if (numero >=20 && numero <=100) {
        
        while (contador < numero) {
            if (contador % 5 == 0) {
                div_msg.innerHTML += `<br> ${contador}`
            }
            contador++
        }

    } 
    
    else {
     alert(`Insira um número válido.`)   
    }

    
}