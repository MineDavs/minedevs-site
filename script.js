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

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

/* EFEITO BOTÃO */
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn")) {
    let btn = e.target;
    let circle = document.createElement("span");

    circle.style.position = "absolute";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.background = "rgba(255,255,255,0.5)";
    circle.style.borderRadius = "50%";
    circle.style.left = "50%";
    circle.style.top = "50%";
    circle.style.transform = "translate(-50%,-50%) scale(0)";
    circle.style.animation = "ripple 0.5s linear";

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  }
});

window.onload = atualizarBarra;
