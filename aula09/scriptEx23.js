var saldo = 0
var valor_poupado = 0
var qtd_meses = 0
var cont_mes = 0
var soma = 0
var final = 0
var mesx = 0

function poupar() {

    saldo = Number(ipt_saldo.value)
    valor_poupado = Number(ipt_valor.value)
    qtd_meses = Number(ipt_meses.value)
    cont_mes = 0

    if (((Number.isNaN(saldo)) || (Number.isNaN(valor_poupado)) || (Number.isNaN(qtd_meses)))) {
        alert(`Insira um número`)
    }

    else if (saldo < 0) {
        alert(`O saldo não pode ser menor que zero.`)
        ipt_saldo.value = ''
    }

    else if (valor_poupado <= 0) {
        alert(`O valor não pode ser zero ou menos.`)
        ipt_valor.value = ''
    }

    else if (qtd_meses < 6 || qtd_meses > 20) {
        alert(`Insira quantidade de meses válida`)
        ipt_meses.value = ''
    }

    else {
        tratamento()
    }
}

function tratamento() {


    while (cont_mes < qtd_meses) {
        cont_mes++
        soma = valor_poupado * cont_mes
        final = soma + saldo
        

        if (cont_mes == 1) {
            div.innerHTML += ` <br> Marco tinha R$${saldo}, depois do depósito do ${cont_mes}° mês ele ficou com R$${final}.`
        }
        
        else {
            div.innerHTML += ` <br> Marco tinha R$${final - valor_poupado}, depois do depósito do ${cont_mes}° mês ele ficou com R$${valor_poupado*cont_mes+saldo}.`
        }


    }

    div.innerHTML += `<br> Você começou com: R$${saldo} <br> Durante os ${qtd_meses} meses você poupou: R$${soma} <br> E agora você tem: R$${final}`


}