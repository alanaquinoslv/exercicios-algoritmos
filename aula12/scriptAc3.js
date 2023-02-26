var prova = [];
var tempo = [];

function registrar() {
  var erro = true;

  if (input_prova.value == "") {
    erro = false;
    alert(`Insira o nome da prova`);
  }
  if (input_tempo.value == "") {
    erro = false;
    alert(`Insira um tempo`);
  }
  if (isNaN(input_tempo.value)) {
    erro = false;
    alert(`Insira números.`);
    input_tempo.value = "";
  }
  if (input_tempo.value < 40 || input_tempo.value > 50) {
    erro = false;
    alert(`O tempo de prova deve estar entre 40 e 50.`);
    input_tempo.value = "";
  }

  if (erro) {
    for (let i = 0; i < prova.length; i++) {
      if (prova[i] == input_prova.value) {
        erro = false;
        alert(`Nâo pode ser inserido nomes repetidos.`);
        input_prova.value = ''
      }
    }
  }

  if (erro) {
    prova.push(input_prova.value);
    tempo.push(Number(input_tempo.value));

    div_msg.innerHTML = "";
    input_prova.value = "";
    input_tempo.value = "";

    alert(`Prova cadastrada com sucesso!`);
    console.log(prova);
    console.log(tempo);
  }
}

function analisar() {
  if (prova.length > 0 || tempo.length > 0) {
    telaPesquisa.style.display = "block";
    telaRegistro.style.display = "none";
  } else {
    alert(`Insira no mínimo uma prova e um tempo.`);
  }
}

function pesquisa() {
  var de = Number(input_tempo_um.value);
  var ate = Number(input_tempo_dois.value);
  var somaTempo = 0;
  var provasIntervalo = 0;
  var erro = true;

  var menorTempo = 50;
  var maiorTempo = 0;

  if (input_tempo_um.value == "" || isNaN(de) || de < 40 || de > 50) {
    erro = false;
    input_tempo_um.value = "";
    alert(`Preencha corretamente o primeiro número.`);
  }

  if (
    input_tempo_dois.value == "" ||
    isNaN(ate) ||
    ate > 50 ||
    ate < 40 ||
    ate < de
  ) {
    erro = false;
    input_tempo_dois.value = "";
    alert(`Preencher corretamente o segundo número.`);
  }

  if (de > ate) {
    erro = false;
    alert("O primeiro tempo tem que ser menor ou igual ao segundo");
  }

  if (erro) {
    div_msg2.innerHTML = "";
    div_msg2.innerHTML += `<h2> Resumo das provas que atendem o intervalo </h2> <br>`;

    for (var i = 0; i < tempo.length; i++) {


      if (tempo[i] >= de && tempo[i] <= ate) {
        provasIntervalo++;
        somaTempo += tempo[i];

        div_msg2.innerHTML += `${i + 1} - ${prova[i]} - ${(tempo[i]).toFixed(1)} <br>`

        if (tempo[i] < menorTempo) {
          menorTempo = tempo[i];
        }
        if (tempo[i] > maiorTempo) {
          maiorTempo = tempo[i];
        }

      }
    }

    if (provasIntervalo > 0) {
        div_msg2.innerHTML += `<br> Menor tempo: ${(menorTempo).toFixed(1)} <br>
      Maior tempo: ${(maiorTempo).toFixed(1)} <br>
      Tempo médio: ${(somaTempo / provasIntervalo).toFixed(1)} <br>`;
    }
    else {
      div_msg2.innerHTML += `Sem provas com esse intervalo de tempo.`
    }

  }
}