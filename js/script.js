document.querySelector("#qtd").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layout-yes").addEventListener("change", updatePrice)
document.querySelector("#layout-no").addEventListener("change", updatePrice)
document.querySelector("#deadline").addEventListener("change", function () {
    const deadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadline} semanas`
    updatePrice()
})

function updatePrice(){
    const qtd = document.querySelector("#qtd").value
    const hasJs = document.querySelector("#js").checked
    const includesLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value
  
    let price = qtd * 100;
    if (hasJs) price *= 1.1
    if (includesLayout) price += 500
    let urgencyFee = 1 - deadline * 0.1;
    price *= 1 + urgencyFee
   
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2).replace(".", ",")}`
}
