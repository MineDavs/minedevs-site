// Exemplo: Feedback visual ao clicar no botão de aula
const buttons = document.querySelectorAll('.btn-buy');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerText = "CARREGANDO...";
    });
});
