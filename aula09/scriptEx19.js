function carona() {
    var qtd_bus = ipt_qtd_bus.value
    var qtd_trem = ipt_qtd_trem.value
    var qtd_metro = ipt_qtd_metro.value
    var cont_bus = 1
    var cont_trem = 1
    var cont_metro = 1

    while (cont_bus <= qtd_bus) {

        if (cont_bus <= qtd_bus) {
            span_bus.innerHTML += ` <br> <b style="color:red;"> Pegando o ${cont_bus}º busão.</b>`
        }

        if (cont_bus == 2) {
            span_bus.innerHTML += ` <b style="color:red;"> - Começando a cansar... </b>`
        }

        if (cont_bus > 2) {
            span_bus.innerHTML += ` <b style="color:red;"> - Já cansado! </b>`
        }

        cont_bus++
    }

    while (cont_trem <= qtd_trem) {

        if (cont_trem <= qtd_trem) {
            span_trem.innerHTML += ` <br> <b style="color:green;"> Pegando o ${cont_trem}º trem.</b>`
        }

        if (cont_trem == 2) {
            span_trem.innerHTML += ` <b style="color:green;"> - Começando a cansar... </b>`
        }

        if (cont_trem > 2) {
            span_trem.innerHTML += ` <b style="color:green;"> - Já cansado! </b>`
        }

        cont_trem++
    }

    while (cont_metro <= qtd_metro) {

        if (cont_metro <= qtd_metro) {
            span_metro.innerHTML += ` <br> <b style="color:blue;"> Pegando o ${cont_metro}º metrô.</b>`
        }

        if (cont_metro == 2) {
            span_metro.innerHTML += ` <b style="color:blue;"> - Começando a cansar... </b>`
        }

        if (cont_metro > 2) {
            span_metro.innerHTML += ` <b style="color:blue;"> - Já cansado! </b>`
        }

        cont_metro++
    }


}