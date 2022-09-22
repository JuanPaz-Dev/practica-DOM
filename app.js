const botonIngreso = document.querySelector('#ingresar');

botonIngreso.onclick = function(e){
    const edadUsuario = document.querySelector('#edad-usuario').value;
    const nombre = document.querySelector('#nombre-usuario').value;
    let textoResultado;
    if (edadUsuario>=18){
        textoResultado = `Tu nombre es ${nombre} Pasas al bar`;
    }
    else{
        textoResultado = `Tu nombre es ${nombre} y NO Pasas al bar`;
    }

    console.log(textoResultado);
    document.querySelector('#resultado').style.display = "block";
    document.querySelector('#resultado').innerHTML = textoResultado;
    return false;
}
