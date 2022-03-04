function truncateText(str, maxlength){
    if(str.length>=maxlength){
        return str.slice(0, maxlength) + '...' 
    }
    else{
        return str
    }
}
console.log(truncateText("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncateText("Всем привет!", 20))


