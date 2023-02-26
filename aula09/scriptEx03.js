function frase() {
    var frase = ipt_frase.value
    var contador = 0

    while (contador < 7)
    div_msg.innerHTML += `${++contador} - ${frase} <br>`

}