function calculo() {
    var ax_peso_homem = Number(ipt_homens.value) * 80;
    var ax_peso_mulher = Number(ipt_mulheres.value) * 60;
    var ax_peso_total = ax_peso_homem += ax_peso_mulher;

    div_msg.innerHTML = `Este elevador suporta até 800kg e o peso estimado desta lotação é de ${ax_peso_total}kg.`

    if (ax_peso_total > 800) {

        div_alerta.innerHTML += ` Será necessário descer alguém para que o elevador se movimente.`
    }

}