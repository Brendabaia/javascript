function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada:${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if( idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else {
            gênero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
            } else if( idade < 21){
                //Jovem
            } else if (idade < 50){
                //adulto
            } else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
    
}