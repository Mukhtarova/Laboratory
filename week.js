var week = Number(prompt("Санды еңгізіңіз: 1,2,3,4,5,6,7"));
if(0<week<=7)
{
    switch(week){
    case 1:
        alert("Дүйсенбі")
    break;
    case 2:
        alert("Сейсенбі")
    break;
    case 3:
        alert("Сәрсенбі")
    break;
    case 4:
        alert("Бейсенбі")
    break;
    case 5:
        alert("Жұма")
    break;
    case 6:
        alert("Сенбі")
    break;
    case 7:
        alert("Жексенбі")
    break;
    default:
        alert("Тек 1,2,3,4,5,6,7 сандарың еңгізіңіз")
        break;
}
} 