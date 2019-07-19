const hash = new Hash;
const tabela = new Tabela;


document.querySelectorAll('.btnNav').forEach(btn => {
    btn.onclick = function (event){
        event.preventDefault();

        let formulario = document.querySelector('#formulario');
        let op = btn.getAttribute('id');
        let mensagem = document.querySelector('#mensagens');

        let aluno = {
            cgu: parseInt(formulario.cgu.value),
            nome: formulario.nome.value
        }
        if( op == 'adicionar'){
            addAluno(aluno, mensagem);
           
        }else if(op == 'pesquisar'){
            limpaMensagens(mensagem);
            pesquisa(mensagem, aluno);            
        }else if(op == 'remover'){
            limpaMensagens(mensagem);
            mensagemRemover(mensagem, aluno);
        }
        formulario.reset();
        formulario.focus();
    }
});

function mensagemRemover(campo, aluno) {
    if (hash.remover(aluno)) {
        campo.textContent = 'Aluno Removido'
        tabela.remover(aluno.cgu);
    }else{
        campo.textContent = 'Este aluno não está contido na tabela';
    }
}

function addAluno(aluno, mensagem) {
    let verif = hash.adicionar(aluno);
    if(verif == false){
        mensagem.textContent = 'Não foi possivel adicionar';
    }else{
        console.log(verif);
        
        tabela.addTr(aluno, verif);
        mensagem.textContent = 'Aluno adicionado';
    }
}

function pesquisa(mensagem, aluno) {
    if(hash.pesquisar(aluno)){
        mensagem.textContent ='aluno encontrado!' 
    }else{
        mensagem.textContent = 'Aluno não encontrado';
    }
}

function limpaMensagens(campo) {
    campo.innerHTML = '';
}

// function mensagemPesquisa(campoMensagem) {
//     campoMensagem.textContent = 'Este CGU não é válido';
// }

// function mensagemAdiciona(verif){
//     let campo = document.querySelector('#mensagens');
    
//     verif ? campo.textContent = 'Aluno Adicionado!' : campo.textContent = 'Aluno não adicionado (limite de 50 alunos atingido)';
// }

// function mostraMsgPesquisa(resp, camp){
//     camp.textContent = '';
//     if(resp != false && resp != undefined){
//         camp.textContent = `Aluno encontrado!!`;
//     }else{
//         camp.textContent = `Aluno não encontrdo!`;
//     }
// }
