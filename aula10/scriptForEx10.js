function numeros() {
    div_msg.innerHTML = ''
    for (let cont = 1; cont <= 15; cont++) {
        
        if (cont != 3 && cont != 4 && cont!= 7 && cont != 10 && cont != 12) {
            div_msg.innerHTML += `${cont} <br>`
        }
        
    }
}