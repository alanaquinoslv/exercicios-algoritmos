function qtd() {
    var qtdXicaras = Number(qtd_xic_input.value)

    div_msg.innerHTML += ''

    // primeira forma
    // for (let cont = 1; cont <= qtdXicaras; cont++) {
    //     if (cont % 1 == 0) {
    //         div_msg.innerHTML += `<img style="width: 150px;" src="https://img.mybest-brazil.com.br/press_component/images/bdc40ea421649bac21df9172ae506b4b.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max&s=22bd8f9ad67f1503cf7aca1ca66caa17" alt="leite em pó">`
    //     }
    // }
    // for (let contcaf = 1; contcaf <= (qtdXicaras*2); contcaf++) {

    //     contcaf*2
           
    //            div_msg.innerHTML += `<img style="width: 150px;" src="https://cafeinacao.com.br/wp-content/uploads/2021/11/borra-de-cafe%CC%81.jpg" alt="café">`          
    // }

    for (let cont = 1; cont <= qtdXicaras; cont++) {
        
    div_msg.innerHTML += `<img style="width: 150px;" src="https://img.mybest-brazil.com.br/press_component/images/bdc40ea421649bac21df9172ae506b4b.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max&s=22bd8f9ad67f1503cf7aca1ca66caa17" alt="leite em pó">`
    div_msg.innerHTML += `<img style="width: 150px;" src="https://cafeinacao.com.br/wp-content/uploads/2021/11/borra-de-cafe%CC%81.jpg" alt="café">`
    div_msg.innerHTML += `<img style="width: 150px;" src="https://cafeinacao.com.br/wp-content/uploads/2021/11/borra-de-cafe%CC%81.jpg" alt="café">`
    div_msg.innerHTML += `<br>`
    }
    

}