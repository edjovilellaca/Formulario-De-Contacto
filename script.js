const boton = document.getElementById('btnEnviar');
boton.addEventListener('click', ()=>{
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre === '' || correo === '' || mensaje === ''){
        alert('Alguno de los campos está incompleto');
    }else{
        alert('Contacto registrado.');
    }
});