function pesquisaBinaria(cgu) {
    let prim = 0;
    let ult = array.length - 1;
    let achou = false;
    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2);
        if (array[meioLista] == cgu) {
            achou = true;
        }
        else {
            if (cgu < array[meioLista]) {
                ult = meioLista - 1;
            }
            else {
                prim = meioLista + 1;
            }
        }
    }
    return achou;
}

function x(n){
    if (n<2){
        return n;
    }else{
        i= x(n-1)+ x(n-2);
        return i;
    }
}

console.log(x(7))

