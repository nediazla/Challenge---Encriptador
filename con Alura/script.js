const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function encriptar(stringEncriptada){
let matriszCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matriszCodigo.length; i++){
        if(stringEncriptada.includes(matriszCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriszCodigo[i][0], matriszCodigo[i][1])
            }
        }
return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matriszCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
        for(let i = 0; i < matriszCodigo.length; i++){
            if(stringDesencriptada.includes(matriszCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matriszCodigo[i][1], matriszCodigo[i][0])
                }
            }
    return stringDesencriptada
    }