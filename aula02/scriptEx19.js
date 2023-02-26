function calculoauxilio() {
    var ax_filhos_menosdez = ipt_filhos_menos_dez.value;
    var ax_filhos_partirdez = ipt_filhos_partir_dez.value;
    var ax_calculo_menosdez = Number(30 * ax_filhos_menosdez);
    var ax_calculo_partirdez = Number(20 * ax_filhos_partirdez); 
    var ax_calculo_total = Number(ax_calculo_menosdez) + Number(ax_calculo_partirdez);


    div_auxilio.innerHTML = "Você tem " + ax_filhos_menosdez + " filhos menores de 10 anos e " + ax_filhos_partirdez + " filhos a partir de 10 anos, logo, seu Auxílio Brasil será de R$" + ax_calculo_total;

}