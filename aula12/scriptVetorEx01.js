function pesquisa() {
  var frutasVetor = ["Manga", "Banana", "Uva", "Morango", "Limão"];

  var pesquisa = input_pesquisa.value
  input_pesquisa.value = ''

  if (frutasVetor.indexOf(pesquisa) == frutasVetor.indexOf(-1)) {
      div_msg.innerHTML = `A fruta ${pesquisa} não existe na lista`
  }
  else {
      div_msg.innerHTML = `A fruta ${pesquisa} existe na lista`
  }

}
