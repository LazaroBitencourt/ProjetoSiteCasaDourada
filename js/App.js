//Função para abrir e fechar o modal de login
const corpo = document.body;
const botaoAbrirModalLogin = document.getElementById('botaoLogin');
const modalLogin = document.getElementById('modal'); 
const botaoFecharModalLogin = document.getElementById('botaoFecharModalLogin');
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
//Função para abrir o modal de cadastro
const botaoAbrirModalCadastro = document.getElementById('botaoCadastrarUsuario');
const botaoJaCadastrado = document.getElementById('botaoCadastrado');
const modalCadastro = document.getElementById('modalCadastro'); 
botaoAbrirModalCadastro.onclick = ()=>{
    modalLogin.close();
    modalLogin.style.visibility = 'hidden';
    modalCadastro.showModal();
    modalCadastro.style.visibility = 'visible';
}
botaoJaCadastrado.onclick = ()=>{
    modalCadastro.close();
    modalCadastro.style.visibility = 'hidden';
    modalLogin.showModal();
    modalLogin.style.visibility = 'visible';
}
//Função para abrir  o modal de cadastro de dados pessoais
const botaoAvancarCadastro = document.getElementById('botaoAvancarCadastro');
const modalCadastroDadosPessoais = document.getElementById('modalCadastroDadosPessoais');
const botaoVoltarCadastro = document.getElementById('botaoVoltarCadastro');

botaoAvancarCadastro.onclick = ()=>{
    modalCadastro.close();
    modalCadastro.style.visibility = 'hidden';
    modalCadastroDadosPessoais.showModal();
    modalCadastroDadosPessoais.style.visibility = 'visible';
}
botaoVoltarCadastro.onclick = ()=>{
    modalCadastroDadosPessoais.close();
    modalCadastroDadosPessoais.style.visibility = 'hidden';
    modalCadastro.showModal();
    modalCadastro.style.visibility = 'visible';
}
