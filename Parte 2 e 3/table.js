class Tabela{
    constructor(){
        this.tabela = document.querySelector('table');
    }

    addCguTabela(elem, hash){
        this.tabela.appendChild(this.tr(elem, hash))
    }

    tr(aluno, hash) {
    let tr = document.createElement('tr');
    let tdHash = document.createElement('td');
    let tdCgu = document.createElement('td');
    let tdNome = document.createElement('td');

    tdHash.textContent = hash;
    tdCgu.textContent = aluno.cgu;
    tdNome.textContent = aluno.nome;
    
    tr.appendChild(tdHash);
    tr.appendChild(tdCgu);
    tr.appendChild(tdNome);

    tr.classList.add('td');

    return tr;
    }

    remover(cgu){
        let alunos = document.querySelectorAll("table tr");

        alunos.forEach(aluno => {
            if (aluno.className == 'td') {
                if (aluno.firstChild.textContent == cgu) {
                    aluno.remove();
                }
            }
        })
    }
    
    
}