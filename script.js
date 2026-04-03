let progresso = localStorage.getItem("prog") || 0;

function atualizarBarra() {
  let bar = document.getElementById("bar");
  if (bar) bar.style.width = progresso + "%";
}

function salvar() {
  progresso += 33;
  if (progresso > 100) progresso = 100;
  localStorage.setItem("prog", progresso);
  atualizarBarra();
}

function entrar() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u && p) {
    localStorage.setItem("user", u);
    window.location.href = "index.html";
  }
}

function verificarLogin() {
  if (!localStorage.getItem("user")) {
    window.location.href = "login.html";
  }
}

function quiz(certo) {
  if (certo) {
    alert("Acertou 😎");
    salvar();
  } else {
    alert("Errou 😢");
  }
}

window.onload = atualizarBarra;
