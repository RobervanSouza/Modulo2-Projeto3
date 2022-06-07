const closeMensagem = document.querySelector('#close');
const mensagem = document.querySelector('#mensagem');

closeMensagem.addEventListener("click", function (){
    mensagem.style.display = "none";
});

setTimeout(() => {
    mensagem.style.display = "none";
}, 5000);