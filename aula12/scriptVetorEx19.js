var pilotos = []
var combustivel = []
var velocidade = []
var voltas = [Number(8)]

function corrida() {
    var erro = true

    if (inputPilotoUm.value == "") {
        erro = false
        alert(`Insira um nome`);
    }
    if (inputPilotoDois.value == "") {
        erro = false
        alert(`Insira um nome`);
    }
    if (inputPilotoTres.value == "") {
        erro = false
        alert(`Insira um nome`);
    }

    if (erro) {
        div_msg.innerHTML = ''

        pilotos.push(inputPilotoUm.value)
        pilotos.push(inputPilotoDois.value)
        pilotos.push(inputPilotoTres.value)

        inputPilotoUm.value = ''
        inputPilotoDois.value = ''
        inputPilotoTres.value = ''

        combustivel.push(Number(50))
        combustivel.push(Number(50))
        combustivel.push(Number(50))

        velocidade.push(Number(0))
        velocidade.push(Number(0))
        velocidade.push(Number(0))

        var volta = 10

        for (let index = voltas[0]; index >= 0; index--) {
            volta--

            var numero1 = Math.random()
            var numero2 = Math.random()
            var numero3 = Math.random()

            velocidade[0] = numero1 * (270 - 230) + 230
            velocidade[1] = numero2 * (270 - 230) + 230
            velocidade[2] = numero3 * (270 - 230) + 230

            var tempoTotal1 = 0
            tempoTotal1 += (20 / velocidade[0])

            var tempoTotal2 = 0
            tempoTotal2 += (20 / velocidade[1])

            var tempoTotal3 = 0
            tempoTotal3 += (20 / velocidade[2])

            combustivel[0] -= (velocidade[0] / 250) * 5
            combustivel[1] -= (velocidade[1] / 250) * 5
            combustivel[2] -= (velocidade[2] / 250) * 5

            if (combustivel[0] <= 0) {
                div_msg.innerHTML = `O piloto ${pilotos[0]} sofreu pane seca.`
            }
            if (combustivel[1] <= 0) {
                div_msg.innerHTML = `O piloto ${pilotos[1]} sofreu pane seca.`
            }
            if (combustivel[2] <= 0) {
                div_msg.innerHTML = `O piloto ${pilotos[2]} sofreu pane seca.`
            }

            div_msg.innerHTML += `<br> O piloto ${pilotos[0]} fez a ${volta}° volta a ${velocidade[0].toFixed(0)} km/h e fez o tempo ${(20 / velocidade[0]).toFixed(2)} com consumo de ${((velocidade[0] / 250) * 5).toFixed(2)}L`

            div_msg.innerHTML += `<br> O piloto ${pilotos[1]} fez a ${volta}° volta a ${velocidade[1].toFixed(0)} km/h e fez o tempo ${(20 / velocidade[1]).toFixed(2)} com consumo de ${((velocidade[1] / 250) * 5).toFixed(2)}L`

            div_msg.innerHTML += `<br> O piloto ${pilotos[2]} fez a ${volta}° volta a ${velocidade[2].toFixed(0)} km/h e fez o tempo ${(20 / velocidade[2]).toFixed(2)} com consumo de ${((velocidade[2] / 250) * 5).toFixed(2)}L <br>`

        }

        if (tempoTotal1 < tempoTotal2 && tempoTotal1 < tempoTotal3) {
            div_msg.innerHTML += `<br> O piloto ${pilotos[0]} foi campeão! Com tempo total de: ${tempoTotal1.toFixed(2)} e ${combustivel[0].toFixed(2)}L de combustível restante.`
        }
        if (tempoTotal2 < tempoTotal1 && tempoTotal2 < tempoTotal3) {
            div_msg.innerHTML += `<br> O piloto ${pilotos[1]} foi campeão! Com tempo total de: ${tempoTotal2.toFixed(2)} e ${combustivel[1].toFixed(2)}L de combustível restante.`
        }
        if (tempoTotal3 < tempoTotal1 && tempoTotal3 < tempoTotal2) {
            div_msg.innerHTML += `<br> O piloto ${pilotos[2]} foi campeão! Com tempo total de: ${tempoTotal3.toFixed(2)} e ${combustivel[2].toFixed(2)}L de combustível restante.`
        }

    }

}