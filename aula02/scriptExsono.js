function fasessono() {
    var ax_horas_de_sono = Number(ipt_hora_sono.value);
    var ax_fase_1 = 5 / 100 * Number(ax_horas_de_sono);
    var ax_fase_2 = 45 / 100 * Number(ax_horas_de_sono);
    var ax_fase_3 = 30 / 100 * Number(ax_horas_de_sono);
    var ax_fase_rem = 20 / 100 * Number(ax_horas_de_sono);

    div_sono.innerHTML = "Ao dormir " + ax_horas_de_sono + " horas, você dormiu:<br> " +  ax_fase_1 + " horas na fase 1" + "<br> " + ax_fase_2 + " horas na fase 2" + "<br>"
    + ax_fase_3 + " horas na fase 3" + "<br>" + ax_fase_rem + " horas na fase REM "; 



    
}