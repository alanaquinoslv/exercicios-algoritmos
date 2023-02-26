function mundial() {
    var contador = 0
    var numero = Number(ipt_mundial.value)

    if (numero <= 0) {
        div_msg.innerHTML = `<img src="http://conteudo.imguol.com.br/c/esporte/77/2022/02/12/torcedores-do-palmeiras-lamentam-derrota-para-o-chelsea-1644693920954_v2_1024x683.jpg" alt="chorando">`
    }
    else {

        while (contador < numero) {
            div_msg.innerHTML += `<img src="https://www.correiodopovo.com.br/image/policy:1.538887:1611498484/mundial-de-clubes_yla3kaxgspe31qxiwmdj5kicc.jpg.jpg?a=1%3A1&$p$a=3e2a58e" alt="mundial" style="width:200px ;"> <br>`
            contador++
        }


    }



}