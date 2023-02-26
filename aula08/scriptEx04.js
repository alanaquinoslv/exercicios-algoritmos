function compra() {
    var ax_metodo = sel_pag.value

    if (ax_metodo == 1 || ax_metodo == 2) {
        alert (`Você terá de pagar à vista.`)
    } 
    else {
        alert (`Pagamento poderá ser parcelado.`)
    }
}