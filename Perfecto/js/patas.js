function EsPerfecto(n){
    let  suma= 0;
    let es = 0;
    for(let j = 1; j<=n-1;j++){
        if(n % j == 0){
            suma = suma + j;
        }
    }
    if(suma == n){
        es = 1;
    }
    return es;
}