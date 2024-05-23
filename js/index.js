const contador = document.getElementById('contador')
let cont = 0

function incrementar(){
    cont++
    contador.innerHTML = `O contador está com ${cont} `
}

function zerar(){
    cont = 0
    contador.innerHTML = ""

}
