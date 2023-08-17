function cambiarNombre(){
    let noneNombre = document.getElementById("textoSinNombre");
    let nombre = document.getElementById("textoNombre");
    let elementoNombre = nombre.value;
    noneNombre.textContent = ("Hola ") + elementoNombre;
    document.getElementById("edad").style.display = "block";

}
   
    

function mostrarCatalogo(){
    let elementoEdad = document.getElementById("edadUsuario");
    let mostrarElemento = elementoEdad.value;
        if(mostrarElemento >= 14 && mostrarElemento <= 16){
        document.getElementById("imagenesEdad_16").style.display = "block";
        }
        if(mostrarElemento < 13){
        document.getElementById("imagenesEdad_13").style.display = "block";
        }
        if(mostrarElemento >= 17 && mostrarElemento <=18 ){
        document.getElementById("imagenesEdad_18").style.display = "block";
        }
        if(mostrarElemento > 18){
        document.getElementById("imagenesEdad_18_Mas").style.display = "block";
        }
} 
    



