function estacao() {
    var ax_mes = ipt_mes.value
    var ax_estacao = ''

    if ((ax_mes == 'dezembro') || (ax_mes == 'janeiro') || (ax_mes == 'fevereiro')) {
        ax_estacao = `Verão`
        div_msg.innerHTML = `${ax_estacao} <br><br> <img src="https://storage.googleapis.com/stateless-ceoblognation-com/2021/04/Getty_1170291847-scaled-768x512.jpg" alt="verao" width="500px">`
    }

    else if ((ax_mes == 'março') || (ax_mes == 'abril') || (ax_mes == 'maio')) {
        ax_estacao = `Outono`
        div_msg.innerHTML = `${ax_estacao} <br><br> <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2018/03/moda-outono.jpg" alt="outono" width="500px">`
    }

    else if ((ax_mes == 'junho') || (ax_mes == 'julho') || (ax_mes == 'agosto')) {
        ax_estacao = `Inverno`
        div_msg.innerHTML = `${ax_estacao} <br><br>  <img src="https://www.hepper.com/wp-content/uploads/2021/11/corgies-in-winter-hats_shutterstock_Bachkova-Natalia-copy-scaled-e1602959788567.webp" alt="inverno" width="500px">`
    }

    else {
        ax_estacao = `Primavera`
        div_msg.innerHTML = `${ax_estacao} <br><br> <img src="https://www.lolipet.com.br/blog/wp-content/uploads/2017/08/b7fc43c1766e7b5f3bca3bc2200d0737-768x432.jpg" alt="primavera" width="500px">`
    }
}