function clicar(){
    let nu = document.getElementById('num')
    let tab = document.getElementById('sel')

    if(nu.value.length == 0){
        alert('Por favor digite um numero!')
    } else {
        let n = Number(nu.value)
        let c = 1
        while(c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}