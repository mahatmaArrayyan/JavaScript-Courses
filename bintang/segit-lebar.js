let s = "";

for( let i = 1; i < 10; i++ ){
    for(let j = 1; j <= i; j++){
        s += "*"
    }
    s += "\n"
}

for( i = 10; i >= 1; i-- ){
    for ( let j = 1; j <= i; j++){
        s += "*";
    }
    s += "\n";
}

console.log(s);

