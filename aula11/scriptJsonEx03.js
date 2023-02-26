var click1 = 0
var saldo = {
    deposito: 0
}

var click2 = 0
var saque = {
    valor: 20
}

function depositar() {
    click1++
    b_saldo.innerHTML = `RS${saldo.deposito += 100}`
    b_deposito.innerHTML = `${click1}`
}

function sacar() {
    click2++
    b_saldo.innerHTML = `RS${saldo.deposito -= saque.valor}`
    b_saque.innerHTML = `${click2}`
}