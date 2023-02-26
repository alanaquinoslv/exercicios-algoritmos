function avalia() {
    var ax_nota_enem = ipt_enem.value
    var ax_nota_vest = ipt_enem.value
    
    if (ax_nota_enem >= 800 || ax_nota_vest >= 700) {
        alert (`Parabéns! Aprovado!`)
    } 
    else {
        alert (`Tente no próximo semestre.`)            
    }
}