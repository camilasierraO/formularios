

function validar(e)
{ 
     console.log("hola");

    var correoElectronico = document.getElementById("correo_electronico").value;
    var contraseña = document.getElementById("Contrasena").value;

    if(correoElectronico == "camila" && contraseña == "12345")
    {
        alert("correo electronico y contraseña validos")
    }
    else
    {
        alert("verifique sus datos");

        
    }
}