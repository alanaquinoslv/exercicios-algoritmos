function tabuada() {
    var ax_tabuada = Number(ipt_tabuada.value)
    var ax_numero_limite = Number(ipt_numero_limite.value)
    var ax_num_contador = 1

   while (ax_num_contador <= ax_numero_limite) {

        if ((ax_num_contador*ax_tabuada) %2 == 0) {
            span_vis.innerHTML += `<br> ${ax_tabuada} x ${ax_num_contador} = <u style="color: blue;">${ax_tabuada*ax_num_contador}</u>`
        }

        if ((ax_num_contador*ax_tabuada) %2 != 0) {
            span_vis.innerHTML += `<br> ${ax_tabuada} x ${ax_num_contador} = <u style="color: red;">${ax_tabuada*ax_num_contador}</u>`
        }
        ax_num_contador++

   }
    
    
}