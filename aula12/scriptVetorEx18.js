var nome = [];
var nota = [];

function registrar() {
  var erro = true

  if (input_nome.value == "") {
    erro = false
    alert(`Insira um nome`);
  }
  if (input_nota.value == "") {
    erro = false
    alert(`Insira uma nota`);
  }
  if (Number.isNaN(input_nota.value) || input_nota.value < 0 || input_nota.value > 10) {
    erro = false
    alert(`A nota pesquisa ve estar entre 0 e 10`);
  }

  if (erro) {
    nome.push(input_nome.value);
    nota.push(Number(input_nota.value));

    div_msg.innerHTML = "";
    input_nota.value = "";
    input_nome.value = "";

    for (var i = nota.length - 1; i >= 0; i--) {
      div_msg.innerHTML += `${nome[i]} - nota: ${nota[i]}  <br>`;

    }
  }
}

function analisar() {
  if (nome.length > 0 || nota.length > 0) {
    telaPesquisa.style.display = "block";
    telaRegistro.style.display = "none";
  } else {
    alert(`Insira no mínimo um aluno e uma nota.`);
  }
}

function igual() {
  var pesquisa = Number(input_nota_um.value);
  var alunoIntervalo = Number(0);
  var somaNota = Number(0);
  var erro = true

  var menor = 10
  var maior = 0

  if (input_nota_um.value == "" || Number.isNaN(pesquisa ) || pesquisa < 0 || pesquisa > 10) {
    erro = false
    input_nota_um.value;
    alert(`Preencher corretamente a primeira nota.`);
  }

  if (erro) {
    div_msg2.innerHTML = ''

    for (let i = 0; i < nota.length; i++) {
      console.log("pesquisa ntro do for");
      console.log(nota[i]);

      if (nota[i] == pesquisa) {
        div_msg2.innerHTML += `O aluno ${nome[i]} ficou com a nota ${nota[i]} <br>`;

        alunoIntervalo++;
        somaNota += nota[i];

        if (nota[i] < menor) {
          menor = nota[i]
        }
        if (nota[i] > maior) {
          maior = nota[i]
        }

      }

    }
    if (alunoIntervalo > 0) {
      div_msg2.innerHTML += `<br> Total pesquisa alunos registrados: ${nome.length} <br>
      Total pesquisa alunos listados: ${alunoIntervalo} <br>
      Maior nota: ${maior} <br>
      Menor nota: ${menor} <br>
      Média da nota: ${(somaNota / alunoIntervalo).toFixed(1)} <br>`;
    }
    else {
      div_msg2.innerHTML += `Sem alunos com nota igual.` 
    }

  }
}

function maior() {
  var pesquisa = Number(input_nota_um.value);
  var alunoIntervalo = Number(0);
  var somaNota = Number(0);
  var erro = true

  var menor = 10
  var maior = 0

  if (input_nota_um.value == "" || Number.isNaN(pesquisa ) || pesquisa < 0 || pesquisa > 10) {
    erro = false
    input_nota_um.value;
    alert(`Preencher corretamente a primeira nota.`);
  }

  if (erro) {
    div_msg2.innerHTML = ''

    for (let i = 0; i < nota.length; i++) {
      console.log("pesquisa ntro do for");
      console.log(nota[i]);

      if (nota[i] > pesquisa) {
        div_msg2.innerHTML += `O aluno ${nome[i]} ficou com a nota ${nota[i]} <br>`;

        alunoIntervalo++;
        somaNota += nota[i];

        if (nota[i] < menor) {
          menor = nota[i]
        }
        if (nota[i] > maior) {
          maior = nota[i]
        }

      }

    }
    if (alunoIntervalo > 0) {
      div_msg2.innerHTML += `<br> Total pesquisa alunos registrados: ${nome.length} <br>
      Total pesquisa alunos listados: ${alunoIntervalo} <br>
      Maior nota: ${maior} <br>
      Menor nota: ${menor} <br>
      Média da nota: ${(somaNota / alunoIntervalo).toFixed(1)} <br>`;
    }
    else {
      div_msg2.innerHTML += `Sem alunos com notas maiores.` 
    }

  }
}

function menor() {
  var pesquisa = Number(input_nota_um.value);
  var alunoIntervalo = Number(0);
  var somaNota = Number(0);
  var erro = true

  var menor = 10
  var maior = 0

  if (input_nota_um.value == "" || Number.isNaN(pesquisa ) || pesquisa < 0 || pesquisa > 10) {
    erro = false
    input_nota_um.value;
    alert(`Preencher corretamente a primeira nota.`);
  }

  if (erro) {
    div_msg2.innerHTML = ''

    for (let i = 0; i < nota.length; i++) {
      console.log("pesquisa ntro do for");
      console.log(nota[i]);

      if (nota[i] < pesquisa) {
        div_msg2.innerHTML += `O aluno ${nome[i]} ficou com a nota ${nota[i]} <br>`;

        alunoIntervalo++;
        somaNota += nota[i];

        if (nota[i] < menor) {
          menor = nota[i]
        }
        if (nota[i] > maior) {
          maior = nota[i]
        }

      }

    }
    if (alunoIntervalo > 0) {
      div_msg2.innerHTML += `<br> Total pesquisa alunos registrados: ${nome.length} <br>
      Total pesquisa alunos listados: ${alunoIntervalo} <br>
      Maior nota: ${maior} <br>
      Menor nota: ${menor} <br>
      Média da nota: ${(somaNota / alunoIntervalo).toFixed(1)} <br>`;
    }
    else {
      div_msg2.innerHTML += `Sem alunos com notas menores.` 
    }

  }
}

function diferente() {
  var pesquisa = Number(input_nota_um.value);
  var alunoIntervalo = Number(0);
  var somaNota = Number(0);
  var erro = true

  var menor = 10
  var maior = 0

  if (input_nota_um.value == "" || Number.isNaN(pesquisa ) || pesquisa < 0 || pesquisa > 10) {
    erro = false
    input_nota_um.value;
    alert(`Preencher corretamente a primeira nota.`);
  }

  if (erro) {
    div_msg2.innerHTML = ''

    for (let i = 0; i < nota.length; i++) {
      console.log("pesquisa ntro do for");
      console.log(nota[i]);

      if (nota[i] != pesquisa) {
        div_msg2.innerHTML += `O aluno ${nome[i]} ficou com a nota ${nota[i]} <br>`;

        alunoIntervalo++;
        somaNota += nota[i];

        if (nota[i] < menor) {
          menor = nota[i]
        }
        if (nota[i] > maior) {
          maior = nota[i]
        }

      }

    }
    if (alunoIntervalo > 0) {
      div_msg2.innerHTML += `<br> Total pesquisa alunos registrados: ${nome.length} <br>
      Total pesquisa alunos listados: ${alunoIntervalo} <br>
      Maior nota: ${maior} <br>
      Menor nota: ${menor} <br>
      Média da nota: ${(somaNota / alunoIntervalo).toFixed(1)} <br>`;
    }
    else {
      div_msg2.innerHTML += `Sem alunos com notas diferentes.` 
    }

  }
}