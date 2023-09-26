let buttonadd = window.document.querySelector("#suma") 
let buttonless = window.document.querySelector("#resta") 
let buttonreset = window.document.querySelector("#reset") 
let inputText = window.document.querySelector("#salida")


function sumar(event) {
    
    let variable = parseInt(inputText.innerHTML)    
    inputText.textContent = variable+1
    
}
function restar(event) {
    
    let variable = parseInt(inputText.innerHTML)    
    inputText.textContent = variable-1
 }

 function reset(event) {
    
    let variable = parseInt(inputText.innerHTML)    
    inputText.textContent = 0
 }


buttonadd.addEventListener("click",sumar)
buttonless.addEventListener("click",restar)
buttonreset.addEventListener("click",reset)