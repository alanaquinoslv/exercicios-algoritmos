var clicks = 0;

function contador() {
    clicks++
    mostrar()
    if (clicks == 3 || clicks == 4 || clicks == 7 || clicks == 10) {

        alert(`Você clicou ${clicks} vezes e Juliana gosta desse número.`)
    }
}

function mostrar() {
    b_clique.innerHTML = clicks
}