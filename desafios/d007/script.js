var cot = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora')

function converter(){
    var qua = window.prompt('QUantos R$você tem na carteira?')
    var res = document.getElementById('res')

    if(cot.length == 0 || qua.length == 0) {
        alert('preencha os dados! ')
    } else {      
        let c = Number(cot)
        let q = Number(qua)
        let r = q / c

        res.innerHTML = `Você tem <strong>$${r}</strong>`
        
    }
}