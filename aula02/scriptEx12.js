function calculoinss() {
    var ax_salario = ipt_salario_bruto.value
    var ax_desconto_inss = ipt_salario_bruto.value * 10 - ipt_salario_bruto.value; 

    div_desconto.innerHTML = "Apesar do seu salário bruto ser R$ " + ipt_salario_bruto.value + " , após os descontos, você receberá somente R$ " + ax_desconto_inss; 

}

    function calculoir() {
        var ax_desconto_ir = ipt_salario_bruto.value *20;
        var ax_desconto_ir_vd = ipt_salario_bruto.value - ax_desconto_ir;

        div_desconto.innerHTML = "Apesar do seu salário bruto ser R$ " + ipt_salario_bruto.value + ", após os descontos, você receberá somente R$ " + ax_desconto_ir;
        
    }
    