var ax_saldo = 0.00;
var ax_op = 0;
var ax_media = 0;

function deposito() {
    if (sel_moeda.value == 5) {
        ax_saldo += 0.05
        ax_op++
        mostrar()
    }

    else if (sel_moeda.value == 10) {
        ax_saldo += 0.1
        ax_op++
        mostrar()
    }

    else if (sel_moeda.value == 25) {
        ax_saldo += 0.25
        ax_op++
        mostrar()
    }

    else if (sel_moeda.value == 50) {

        ax_saldo += 0.5
        ax_op++
        mostrar()
    }

    else if (sel_moeda.value == 1) {

        ax_saldo++
        ax_op++
        mostrar()
    }
}

function mostrar() {
    ax_media = ax_op / ax_saldo
    b_saldo.innerHTML = ax_saldo.toFixed(2)
    b_op.innerHTML = ax_op
    b_media.innerHTML = ax_media.toFixed(2)
}

function gastar() {
    ax_saldo = 0
    ax_op = 0
    ax_media = 0
    b_saldo.innerHTML = ax_saldo.toFixed(2)
    b_op.innerHTML = ax_op
    b_media.innerHTML = ax_media
}