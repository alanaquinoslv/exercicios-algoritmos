function cabalistico() {
    var contador = 1

    while (contador <= 15) {

    if (contador != 3 && contador != 4 && contador != 7 && contador != 10 && contador != 12 ) {
        div_msg.innerHTML += `<br>${contador}`

    }
    contador++
}

}