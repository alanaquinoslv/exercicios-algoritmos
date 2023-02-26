function resultado_eleicoes() {
    var ax_votos_caligula = Number(ipt_votos_caligula.value);
    var ax_votos_nero = Number(ipt_votos_nero.value);
    var ax_votos_brancos = Number(ipt_votos_brancos.value);
    var ax_votos_nulos = Number(ipt_votos_nulos.value);
    var ax_totalvotos = Number(ax_votos_caligula) + Number(ax_votos_nero) + Number(ax_votos_brancos) + Number(ax_votos_nulos);
    var ax_invalidos = Number(ax_votos_brancos) + Number(ax_votos_nulos);

    div_eleicao.innerHTML = "Total de votos: " + ax_totalvotos +  
    "<br>Caligula: " + ax_votos_caligula / ax_totalvotos * 100 + "%" + " com " + ax_votos_caligula + " votos" + 
    "<br>Nero: " + ax_votos_nero / ax_totalvotos * 100 + "%" + " com " + ax_votos_nero + " votos" +
    "<br>Inválidos: " + ax_invalidos / ax_totalvotos * 100 + "%" + " com " + ax_invalidos + " votos";

    
}