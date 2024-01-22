function osszeadas(a,b){
    return a+b;
}
function kivonas(a,b){
    return a-b;
}
function szorzas(a,b){
    return a*b;
}
function osztas(a,b){
    if(b == 0){
        return;
    }
    else{
        return a/b;
    }
}

function szamol(muvelet,a,b){
    if(muvelet == osszeadas){
        return osszeadas(a,b);
    }
    else if(muvelet == kivonas){
        return kivonas(a,b);
    }
    else if(muvelet == szorzas){
        return szorzas(a,b);
    }
    else{
        return osztas(a,b);
    }
}

// Ellenőrzés:}
let result = szamol(osszeadas, 5, 3);
console.log('Az összeadás eredménye: 8, a számolt érték: ' + result);

result = szamol(kivonas, 8, 2);
console.log('A kivonás eredménye: 6, a számolt érték: ' + result);

result =  szamol(szorzas, 4, 6);
console.log('A szorzás eredménye: 24, a számolt érték: ' + result);

result =  szamol(osztas, 9, 3);
console.log('Az osztás eredménye: 3, a számolt érték: ' + result);