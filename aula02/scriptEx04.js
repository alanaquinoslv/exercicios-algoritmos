function imchomem() {

    div_imc.innerHTML = "O seu IMC é: " + ipt_peso.value / (ipt_altura.value /100 *100)  ** ipt_altura.value;
    }
    