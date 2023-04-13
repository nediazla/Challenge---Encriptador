// Función para encriptar el texto

function encriptar() {
    // Obtener el texto a encriptar
    var texto = document.getElementById("area-de-texto").value;
  
    // Reemplazar cada letra por su correspondiente
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
  
    // Mostrar el resultado
    document.getElementById("out_content").value = texto;
  }
  
  // Función para desencriptar el texto
  function desencriptar() {

    // Obtener el texto a desencriptar
    var texto = document.getElementById("area-de-texto").value;
  
    // Reemplazar cada correspondiente por su letra original
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
  
    // Mostrar el resultado
    document.getElementById("resultado").value = texto;
  }
  
  // Función para copiar el resultado al portapapeles
  function copiar() {
    
    // Seleccionar el cuadro de texto
    var resultado = document.getElementById("out_content");
    resultado.select();
  
    // Copiar el texto seleccionado
    document.execCommand("copy");
  }
  