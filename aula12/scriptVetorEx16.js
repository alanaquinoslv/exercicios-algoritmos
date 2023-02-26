var numeros = [];

    function registra() {
        var maior = 0
        var menor = 9999
        var erro = true

        if (input_num.value == "") {
            erro = false
            alert(`Insira um número`);
            input_num.value = "";
        }
        if (isNaN(input_num.value)) {
            erro = false
            alert(`Insira números`);
            input_num.value = "";
        }

        if (erro) {
            div_msg.innerHTML = ''
            numeros.push(Number(input_num.value));

            input_num.value = "";
            console.log(numeros)

            for (var i = 0; i < numeros.length; i++) {


                div_msg.innerHTML += `${[i + 1]}º Número: ${numeros[i]} <br>`

                if (numeros[i] > maior) {
                    maior = numeros[i]
                }
                if (numeros[i] < menor) {
                    menor = numeros[i]
                }
            }

            div_msg.innerHTML += `<br> Maior: ${maior}`
            div_msg.innerHTML += `<br> Menor: ${menor}`
            console.log('maior' + maior)
            console.log('menor' + menor)
        }
    }
