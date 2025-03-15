function cal(){
    let prod = window.prompt('Qual é o produto que você está comprando?')
    let val =window.prompt(`Qual é o preço de ${prod}`).replace(',', '.')
    let res = document.getElementById('res')
    let por = 10 // Porcentagem do desconto (10%)

     // Calculando o valor do desconto

    let v = (val * 10) / 100
    let r = val - v

    res.innerHTML = `<strong>Calculando desconto de 10% para ${prod}</strong> <br>
    O preço original era R$${val} <br>
    Você acaba de ganhar R$${v} de desconto(-10%) <br>
    NO fim, você vai pagar R$${r} no produto ${prod}`
    
}