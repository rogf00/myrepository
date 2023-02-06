const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
    const Texencriptado = encriptar(textArea.value);
    mensaje.value=Texencriptado
    textArea.value="";
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < codigo.length; i++){
        if (stringEncriptado.includes(codigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const encriptado=desencriptar(textArea.value);
    mensaje.value=encriptado
    textArea.value="";
    mensaje.style.backgroundImage="none";
}

function desencriptar(stringDesencriptado){
    let codigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for (let i = 0; i < codigo.length; i++){
        if (stringDesencriptado.includes(codigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return stringDesencriptado
}