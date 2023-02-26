function trescinco() {

    var cont = 1


    while (cont <= 100) {

        if (cont % 3 == 0 && cont % 5 == 0) {
            cont++
            span_msg.innerHTML += ` - É TRI! É PENTA! <br>`
        }

        else if (cont % 3 == 0) {
            cont++
            span_msg.innerHTML += ` - É TRI! <br>`
        }

        else if (cont % 5 == 0) {
            cont++
            span_msg.innerHTML += ` - É PENTA! <br>`
        }

        else {
            span_msg.innerHTML += `${cont++} <br>`
        }

    }

}