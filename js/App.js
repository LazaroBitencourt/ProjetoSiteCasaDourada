//Função para abrir e fechar o modal de login
const botaoAbrirModalLogin = document.getElementById('botaoLogin');
const modalLogin = document.getElementById('modal'); 
const botaoFecharModalLogin = document.getElementById('botaoFecharModalLogin');
const corpo = document.body;
botaoAbrirModalLogin.onclick = ()=>{
    corpo.style.opacity = '0.3';
    modalLogin.showModal();
}
botaoFecharModalLogin.onclick = ()=>{
    modalLogin.close();
    corpo.style.opacity = '1';
}