//Função para abrir e fechar o modal de login
const corpo = document.body;
const botaoAbrirModalLogin = document.getElementById('botaoLogin');
const modalLogin = document.getElementById('modal');
const botaoFecharModal = document.getElementsByClassName('botaoFecharModal');
const botaoFazerLogin = document.getElementById('botaoModalLogin');
botaoAbrirModalLogin.onclick = () => {
    corpo.style.opacity = '0.3';
    modalLogin.style.visibility = 'visible';
    modalLogin.showModal();
}
botaoFecharModal.onclick = () => {
    modalLogin.close();
    modalLogin.style.visibility = 'hidden';
    corpo.style.opacity = '1';
}
//Função login de usuário
var nomeUsuario = "Ana Paula"
var emailUsuario = "", senha = "";
var emailUsuarioDigitado = "", senhaUsuarioDigitado = "", logado = false;

var elementoAntigo = botaoAbrirModalLogin;
const elementoNovo = document.getElementById('containerLogado');
var elementoAuxiliar;
const login = () => {
    emailUsuarioDigitado = document.getElementById('emailUsuario').value;
    senhaUsuarioDigitado = document.getElementById('senhaUsuario').value;
    nomeUsuarioCabecalho = document.getElementById('nomeUsuario');

    if (emailUsuarioDigitado === emailUsuario && senhaUsuarioDigitado === senha) {
        logado = true;
        elementoAuxiliar = elementoAntigo.cloneNode(true);
        nomeUsuarioCabecalho.innerText = nomeUsuario;
        elementoAntigo.replaceWith(elementoNovo);
        elementoNovo.style.visibility = 'visible';
        document.getElementById('emailUsuario').value = "";
        document.getElementById('senhaUsuario').value = "";
        modalLogin.close();
        modalLogin.style.visibility = 'hidden';
        corpo.style.opacity = '1';
    }
    else {
        alert("Email ou senha inseridos inválidos!");
    }
}
botaoFazerLogin.onclick = () => {
    //alert("feito!");
    login();
}
// Função configuração de Perfil
const botaoConfigPerfil = document.getElementById('botaoConfigPerfilCabecalho');
botaoConfigPerfil.onclick = () => {
    nomeUsuarioCabecalho.innerText = "";
    elementoNovo.replaceWith(elementoAuxiliar);

    elementoAuxiliar.onclick = () => {
        corpo.style.opacity = '0.3';
        modalLogin.style.visibility = 'visible';
        modalLogin.showModal();
    }
}
//Função para abrir o modal de cadastro
const botaoAbrirModalCadastro = document.getElementById('botaoCadastrarUsuario');
const botaoJaCadastrado = document.getElementById('botaoCadastrado');
const modalCadastro = document.getElementById('modalCadastro');
botaoAbrirModalCadastro.onclick = () => {
    modalLogin.close();
    modalLogin.style.visibility = 'hidden';
    modalCadastro.showModal();
    modalCadastro.style.visibility = 'visible';
}
botaoJaCadastrado.onclick = () => {
    modalCadastro.close();
    modalCadastro.style.visibility = 'hidden';
    modalLogin.showModal();
    modalLogin.style.visibility = 'visible';
}
//Função para abrir  o modal de cadastro de dados pessoais
const botaoAvancarCadastro = document.getElementById('botaoAvancarCadastro');
const modalCadastroDadosPessoais = document.getElementById('modalCadastroDadosPessoais');
const botaoVoltarCadastro = document.getElementById('botaoVoltarCadastro');

botaoAvancarCadastro.onclick = () => {
    modalCadastro.close();
    modalCadastro.style.visibility = 'hidden';
    modalCadastroDadosPessoais.showModal();
    modalCadastroDadosPessoais.style.visibility = 'visible';
}
botaoVoltarCadastro.onclick = () => {
    modalCadastroDadosPessoais.close();
    modalCadastroDadosPessoais.style.visibility = 'hidden';
    modalCadastro.showModal();
    modalCadastro.style.visibility = 'visible';
}
//Função para abrir  o modal de cadastro de endereço
const botaoAvancarCadastroEndereco = document.getElementById('botaoaAvancarCadastroEndereco');
const modalCadastroEndereco = document.getElementById('modalCadastroEndereco');
const botaoVoltarCadastroDadosPessoais = document.getElementById('botaoVoltarCadastroDadosPessoais');

botaoAvancarCadastroEndereco.onclick = () => {
    modalCadastroDadosPessoais.close();
    modalCadastroDadosPessoais.style.visibility = 'hidden';
    modalCadastroEndereco.showModal();
    modalCadastroEndereco.style.visibility = 'visible';
}
botaoVoltarCadastroDadosPessoais.onclick = () => {
    modalCadastroEndereco.close();
    modalCadastroEndereco.style.visibility = 'hidden';
    modalCadastroDadosPessoais.showModal();
    modalCadastroDadosPessoais.style.visibility = 'visible';
}
//Função para abrir  o modal de finalizar cadastro
const botaoAvancaFinalizarCadastro = document.getElementById('botaoAvancarFinalizarCadastro');
const modalFinalizarCadastro = document.getElementById('modalFinalizaCadastro');
const botaoFinalizarCadastro = document.getElementById('botaoFinalizarCadastro');
const botaoVoltarCadastroEndereco = document.getElementById('botaoVoltarCadastroEndereco');
botaoAvancaFinalizarCadastro.onclick = () => {
    modalCadastroEndereco.close();
    modalCadastroEndereco.style.visibility = 'hidden';
    modalFinalizarCadastro.showModal();
    modalFinalizarCadastro.style.visibility = 'visible';
}
botaoFinalizarCadastro.onclick = () => {
    modalFinalizarCadastro.close();
    modalFinalizarCadastro.style.visibility = 'hidden';
    corpo.style.opacity = '1';
}
botaoVoltarCadastroEndereco.onclick = () => {
    modalFinalizarCadastro.close();
    modalFinalizarCadastro.style.visibility = 'hidden';
    modalCadastroEndereco.showModal();
    modalCadastroEndereco.style.visibility = 'visible';
}

