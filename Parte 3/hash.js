class Hash{
    constructor(){
        this.vetor =[];
        // this.limite = 50;
    }
    adicionar(aluno){
        let hash = this.calculaHash(aluno.cgu);    
        if(this.vetor[hash] == null ){
            this.vetor[hash] = aluno;
            return hash;
        }else if(this.vetor[hash + 1] == null ){
             this.vetor[hash + 1] = aluno;
             return hash+1;
        }else{
            return false;
        }
    }

    calculaHash(aluno){
        let a = parseInt(aluno.toString().charAt(0) + aluno.toString().charAt(3)+aluno.toString().charAt(6));
        a = a %15;
        return a;
    }

    pesquisar(aluno){
        let hash = this.calculaHash(aluno.cgu);
        if(this.vetor[hash]){
            if (this.vetor[hash].cgu == aluno.cgu){
                return this.vetor[hash];
            }else if(this.vetor[hash+1].cgu == aluno.cgu){
                return this.vetor[hash+1];
            }
        }else{
           return false;
        }
    }

    remover(aluno){
        let hash = this.calculaHash(aluno.cgu);
        if(this.vetor[hash]){
            if(this.vetor[hash].cgu == aluno.cgu && this.vetor[hash].nome == aluno.nome){
                this.vetor[hash] == undefined;
                return true
            }else if(this.vetor[hash+1].cgu == aluno.cgu && this.vetor[hash+1].nome == aluno.nome){
                this.vetor[hash+1] == undefined;   
                return true;  
           }
        }else{
            return false;
        }

    }
}

    // adicionar(elem){
    //     let hash = this.calculaHash(elem);
    //     return this.addVetor(elem, hash);
    // }
    // addVetor(elem, hash){
    //     if (hash == this.limite) {
    //         return false;
    //     }else {
    //         this.vetor[hash] = elem;
    //         return true;
    //     }
    // }

    // calculaHash(elem, hash = -1){
    //     if (hash == -1) {
    //         var hash = elem.charAt(0) + elem.charAt(3) + elem.charAt(6);
    //         hash = hash % 15;
    //     }
    //     if (this.vetor[hash] != undefined) {
    //         return this.calculaHash(elem, hash+1);
    //     }else{
    //         return hash;
    //     }
    //  }
    //  devolveCalculoHash(aluno){
    //      return this.calculaHash(aluno);
    //  }

    //  verificaArray(array, hash){
    //     if (array[hash] == undefined) {
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }

   

// let classe = new Hash;

// console.log(classe.adicionar({
//     cgu: '126016310',
//     nome: 'luciel prux'
// }))
// console.log(classe.adicionar({
//     cgu: '126195810',
//     nome: 'karine iapê'
// }));
// console.log(classe.adicionar({
//     cgu: '125509510',
//     nome: 'siclano de la'
// }));

// console.log(classe.vetor);


