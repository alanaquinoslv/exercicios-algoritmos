var fraseUm = ''
    var fraseDois = ''

    function gerar() {

        if (sel_fraseUm.value != 0) {
            fraseUm = sel_fraseUm.value
        }

        else if (sel_fraseDois.value != 0) {
            fraseDois = sel_fraseDois.value
        }

        alert(`${sel_fraseUm.value} ${sel_fraseDois.value}`)

    }