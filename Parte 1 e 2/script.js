const tabela = new Tabela;
const funcao = new Funcoes;

document.querySelectorAll('.btnNav').forEach(btn => {
    btn.onclick = function (event){
        event.preventDefault();

        let form = document.querySelector('#formulario');
        let op = btn.getAttribute('id');
        let msg = document.querySelector('#mensagens');
        
        let aluno = {
            cgu: parseInt(form.cgu.value),
            nome: form.nome.value
        }

        if(op == 'adicionar'){
            limpaMensagens(msg);
            addAluno(aluno);
        }else if(op == 'pesquisaSequencial'){
            limpaMensagens(msg);
            let resp = funcao.pesquisaSequencial(aluno.cgu);
            mostraMensagemPesquisa(resp, msg);
        }else if(op == 'pesquisaBinaria'){
            limpaMensagens(msg);
            let resp2 = funcao.pesquisaBinaria(aluno.cgu);
            mostraMensagemPesquisa(resp2, msg);
        }else if(op == 'ordenar'){
            tabela.vetorTabela(funcao.cocktail());
        }
        form.reset();
        form.cgu.focus();
    }
});

function pesquisa(aluno){
    let verif = funcao.pesquisaSequencial(aluno);

    mensagemPesquisa(verif);
}

function mensagemPesquisa(verif){
    let campo = querySelector('#mensagens');

    verif ? campo.textContent = 'Aluno encontrado!' : campo.textContent = 'Aluno não esta na lista'
}

function addAluno(aluno) {
    funcao.add(aluno);
    tabela.addTr(aluno);
}

function mostraMensagemPesquisa(resp, campo) {
    campo.textContent = '';

    if (resp != false && resp != undefined) {
        campo.textContent = `Aluno ${resp.nome} encontrado!!`;
    }else{
        campo.textContent = `Cgu não encontrdo!`;
    }
}

function limpaMensagens(campo) {
    campo.innerHTML = '';
}

// function mostraMensagemAdd(campo) {
//     campo.innerHTML = '';
//     campo.textContent = 'Preencha os campos corretamente.';
// }


// function addTabela(aluno) {
//     let table = document.querySelector('table');
//     let tr = document.createElement('tr');
//     let tdCgu = document.createElement('td');
//     let tdNome = document.createElement('td');

//     tdCgu.textContent = aluno.cgu;
//     tdNome.textContent = aluno.nome;

//     tr.appendChild(tdCgu);
//     tr.appendChild(tdNome);

//     table.appendChild(tr);
// }

// let btnAdiciona = document.querySelector('#adicionar');

// btnAdiciona.addEventListener('click',function(event){
//     event.preventDefault();

//     let formulario = document.querySelector('#formulario');

//     let aluno = {
//         cgu: parseInt(formulario.cgu.value),
//         nome: formulario.nome.value
//     }

//     addTabela(aluno);
    
// })
// let btnPesquisaSequencial = document.querySelector('#pesquisaSequencial');

// btnPesquisaSequencial.addEventListener('click',function(event){
//     event.preventDefault();

//     formulario = document.querySelector('#formulario');

// })

    
