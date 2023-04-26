/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

    MI ORDEN: por cuestion de funcionalidad

    "e" = "enter"
    "o" = "ober"
    "i" = "imes"
    "a" = "ai"
    "u" = "ufat"

 */

function encrypt () {
    var texto = document.getElementById('inputText').value.toLocaleLowerCase();

    var textCifrado = texto.replace(/e/igm, "enter");
    var textCifrado = textCifrado.replace(/o/igm, "ober");
    var textCifrado = textCifrado.replace(/i/igm, "imes");
    var textCifrado = textCifrado.replace(/a/igm, "ai");
    var textCifrado = textCifrado.replace(/u/igm, "ufat");

    //document.querySelector('message>img').style.display = none;
    document.getElementById('messageImg').style.display = 'none';
    document.getElementById('messageTitle').style.display = 'none';
    document.getElementById('showMassage').innerText = textCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';
    document.getElementById("messageId").style.height = "100%";
    //document.getElementsByClassName('.message').style.height = '150vi';

}

function decrypt () {
    var texto = document.getElementById('inputText').value.toLocaleLowerCase();

    var textCifrado = texto.replace(/enter/igm, "e");
    var textCifrado = textCifrado.replace(/ober/igm, "o");
    var textCifrado = textCifrado.replace(/imes/igm, "i");
    var textCifrado = textCifrado.replace(/ai/igm, "a");
    var textCifrado = textCifrado.replace(/ufat/igm, "u");

    //document.querySelector('message>img').style.display = none;
    document.getElementById('messageImg').style.display = 'none';
    document.getElementById('messageTitle').style.display = 'none';
    document.getElementById('showMassage').innerText = textCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';

}


function copiar () {
    var content = document.querySelector('#showMassage');
    content.select();
    document.execCommand('copy');
    alert("Texto Copiado")
}



