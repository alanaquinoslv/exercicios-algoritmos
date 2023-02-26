function media() {
    var ax_primeira = Number(ipt_notaum.value)
    var ax_segunda = Number(ipt_notadois.value)
    var ax_terceira = Number(ipt_notatres.value)
    var ax_media = (ax_primeira + ax_segunda + ax_terceira) / 3

    if (ax_media < 5) {
        alert(`Aluno precisa de muita ajuda.`)
    }

    else if (ax_media <= 7) {
        alert(`Aluno na média.`)
    }

    else if (ax_media <= 9.5) {
        alert(`Aluno acima da média.`)
    }

    else {
        alert(`Aluno fora da curva.`)
    }



}