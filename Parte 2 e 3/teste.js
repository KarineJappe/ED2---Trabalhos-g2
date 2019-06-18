function calculaHash(aluno){
    let a = aluno%15;
    return a;
}

b = 16;
console.log(calculaHash(b));



// function x(n){
//     if (n<2){
//         return n;
//     }else{
//         return x(n-1) + x(n-2);
//     }
// }

// console.log(x(9));
