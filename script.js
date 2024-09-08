const boton = document.getElementById('btnEnviar');
boton.addEventListener('click', ()=>{
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    if(nombre == '' || correo == '' || mensaje == ''){
        alert('Alguno de los campos está incompleto');
    }else{
        alert('Contacto registrado.');
    }
});