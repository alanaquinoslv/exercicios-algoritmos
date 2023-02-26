function verificas() {

    var email = inputEmail.value

    if (email.includes('@')) {
        span_msg.innerHTML = `e-mail válido`
    }
    else {
        span_msg.innerHTML = `e-mail inválido`
    }   
}