let san=20;
go:
for(let i=2; i<=san; i++){
    for(let j=2; j<i; j++){
        if(i%j == 0) continue go;
    }
    alert(i + " - жай сан")
}