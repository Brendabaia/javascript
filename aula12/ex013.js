var agora = new Date()
var Diasem = agora.getDay()
/*
        0 = Dom
        1 = Seg
        2 = Ter
        3 = Qua
        4 = Qui
        5 = Sex
        6 = Sáb
*/

console.log(Diasem)

switch(Diasem) {
    case 0:
        console.log('Domigo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
        case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
        case 6:
        console.log('Sábado')
        break
    default:
     console.log('[ERRO] Dia da semana invalido')
     break
}