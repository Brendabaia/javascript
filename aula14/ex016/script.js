function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO] Verifique os dados!')     
    }else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <= 0){
            window.alert('ERRO considerando passo 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for( let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
            }
            
        } else {
            //contagem regressiva
            for(let c = i; c>= f; c-= p){
            res.innerHTML += `${c} \u{1F449}`
            }
            
        }      
        res.innerHTML += `\u{1F3C1}`  
    }
}