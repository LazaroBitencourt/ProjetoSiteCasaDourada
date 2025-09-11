//Função para abrir e fechar o modal de login
const botaoAbrirModalLogin = document.getElementById('botaoLogin');
const modalLogin = document.getElementById('modal'); 
const botaoFecharModalLogin = document.getElementById('botaoFecharModalLogin');
const corpo = document.body;
botaoAbrirModalLogin.onclick = ()=>{
    corpo.style.opacity = '0.3';
    modalLogin.style.visibility = 'visible';
    modalLogin.showModal();
}
botaoFecharModalLogin.onclick = ()=>{
    modalLogin.close();
    modalLogin.style.visibility = 'hidden';
    corpo.style.opacity = '1';
}