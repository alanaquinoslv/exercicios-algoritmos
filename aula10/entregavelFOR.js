function mostrar() {
    span_div.innerHTML = ''
    var limiteInf = Number(input_inf.value)
    var limiteSup = Number(input_sup.value)
    var numeroDiv1 = Number(input_div_um.value)
    var numeroDiv2 = Number(input_div_dois.value)

    if (Number.isNaN(limiteInf) || Number.isNaN(limiteSup) || Number.isNaN(numeroDiv1) || Number.isNaN(numeroDiv2)) {
        alert(`Insira um número.`)
        input_inf.value = ''
        input_sup.value = ''
        input_div_um.value = ''
        input_div_dois.value = ''
    }
    else if (limiteInf <= 20) {
        alert(`O limite inferior precisa ser maior que 20!`)
        input_inf.value = ''
    }
    else if (limiteSup <= limiteInf || limiteSup >= 1000) {
        alert(`Limite superior inválido, verifique o conteúdo.`)
        input_sup.value = ''
    }
    else if (numeroDiv1 < 3 || numeroDiv1 > 20) {
        alert(`O primeiro número de divisibilidade tem que estar entre 3 e 20.`)
        input_div_um.value = ''
    }
    else if (numeroDiv2 == numeroDiv1 || numeroDiv2 < 3 || numeroDiv2 > 20) {
        alert(`O segundo número de divisibilidade tem que estar entre 3 e 20 e ser diferente do primeiro.`)
        input_div_dois.value = ''
    }
    else {

        for (var cont = limiteInf, numqtd = 0, numDiv = 0, somatorio = 0, maiorNum = 0, menorNum = 9999; cont <= limiteSup; cont++) {

            if (cont % numeroDiv1 == 0 && cont % numeroDiv2 == 0) {
                span_div.innerHTML += `O número ${cont} é divisível pelo primerio e pelo segundo número <br>`
                numqtd++
                numDiv++
                somatorio += cont

                if (cont > maiorNum) { maiorNum = cont }
                if (cont < menorNum) { menorNum = cont }
            }
            else if (cont % numeroDiv1 == 0) {
                span_div.innerHTML += `O número ${cont} é divisível pelo primeiro número <br>`
                numqtd++
                numDiv++
                somatorio += cont

                if (cont > maiorNum) { maiorNum = cont }
                if (cont < menorNum) { menorNum = cont }
            }
            else if (cont % numeroDiv2 == 0) {
                span_div.innerHTML += `O número ${cont} é divisível pelo segundo número <br>`
                numqtd++
                numDiv++
                somatorio += cont

                if (cont > maiorNum) { maiorNum = cont }
                if (cont < menorNum) { menorNum = cont }
            }

        }

        if (numDiv == 0) {
            span_div.innerHTML = `<br>Não foram encontrados números divisíveis.`
        }
        else if (numDiv > 0) {
            span_div.innerHTML += `<br>Quantidade de números exibidos: ${numqtd}`
            span_div.innerHTML += `<br>Média dos números exibidos: ${(somatorio / numqtd).toFixed(1)}`
            span_div.innerHTML += `<br>Maior número exibido: ${maiorNum}`
            span_div.innerHTML += `<br>Menor número exibido: ${menorNum}`
        }
    }
}