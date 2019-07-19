class Tabela{
    constructor(){
        this.table = document.querySelector('table');
    }
  
    tr(aluno){
        let tdCgu = document.createElement('td');
        let tdNome = document.createElement('td');
        let tr = document.createElement('tr');

        tdCgu.textContent = elem.cgu;
        tdNome.textContent = elem.nome;
        
        tr.appendChild(tdCgu);
        tr.appendChild(tdNome);
        tr.classList.add('td')

        return tr;
    }
    
    vetorTabela(vetor){
        let conteudo = document.querySelectorAll(".td");
        conteudo.forEach(elem => {
            elem.parentNode.removeChild(elem);
        })
        

        vetor.forEach(elem => {
            this.table.appendChild(this.tr(elem));
        });
    }
    
    addTr(elem){
        this.table.appendChild(this.tr(elem))
    }
   
}