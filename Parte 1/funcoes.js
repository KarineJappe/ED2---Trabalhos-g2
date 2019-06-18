class Funcoes{
    constructor(){
        this.vetor =[];
    }
    add(elem){
        this.vetor.push(elem);
    }
        
    pesquisaSequencial(cgu){
        let cont = 0;
        let achou = false;
        while(cont < this.vetor.length && !achou){
            if (this.vetor[cont].cgu == cgu){
                achou = this.vetor[cont];
            }
            else{
                cont = cont+1;
            }
        }
        return achou;
    }

    pesquisaBinaria(cgu) {
        let inicio = 0;
        let fim =this.vetor.length - 1;
        let achou = false;
        while (inicio <= fim && !achou) {
            let meioLista = Math.ceil((inicio + fim) / 2);
            if (this.vetor[meioLista].cgu == cgu) {
                achou = this.vetor[meioLista];
            }
            else {
                if (cgu < this.vetor[meioLista]) {
                    fim = meioLista - 1;
                }
                else {
                    inicio = meioLista + 1;
                }
            }
        }
        return achou;
    }
    cocktail() {
        let inicio=0;
        let fim = this.vetor.length - 1;
        let aux= [];
        let i;
        while (inicio <= fim) {

            for (i = inicio; i < fim; i++) {
                if (this.vetor[i].cgu > this.vetor[i + 1].cgu) {
                    aux = this.vetor[i];
                    this.vetor[i] = this.vetor[i + 1];
                    this.vetor[i + 1] = aux;
                }
            }
            fim -= 1;
            for ( i = fim; i > inicio; i--) {
                if (this.vetor[i].cgu < this.vetor[i - 1].cgu) {
                    aux = this.vetor[i];
                    this.vetor[i] = this.vetor[i - 1];
                    this.vetor[i - 1] = aux;
                }
            }
            inicio += 1;
        }
        return this.vetor;   
    }


}