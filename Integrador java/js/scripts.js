let importeTotal = document.getElementById("resumen");
importeTotal.onclick = resumen; 
function resumen(){
    let precio = 200
    let descuento  
    switch(categoria.value){
        case "Estudiante" :
            precio = precio * cantidad.value
            descuento = precio * (80/100)
            azul.innerHTML = `<p>Total a Pagar $ ${precio-descuento}.  Su descuento por "${categoria.value}" es $ ${descuento}. </>` 
            break
        case "Trainee" :
            precio = precio * cantidad.value
            descuento = precio * (50/100)
            azul.innerHTML = `<p>Total a Pagar $ ${precio-descuento}.  Su descuento por "${categoria.value}" es $ ${descuento}. </>`
            break 
        case "Junior" :
            precio = precio * cantidad.value
            descuento = precio * (15/100)
            azul.innerHTML = `<p>Total a Pagar $ ${precio-descuento}.  Su descuento por "${categoria.value}" es $ ${descuento}. </>` 
            break
        default :
           azul.innerHTML ="Debe ingresar una opcion" 

    } 
    }

    function solonumeros(e){
        key=e.keyCode  || e.which;
        teclado=String.fromCharCode(key);
        numeros="0123456789";
        especiales="8,37,38,46";
        teclado_especial=false;

    for(let i in especiales) {
        if (key==especiales [i]){
            teclado_especial=true;
        }
    }
         if(numeros.indexOf(teclado) == -1 && !teclado_especial){
             return false;
         }
    }
    
    let vaciar = document.getElementById("borrar");
    vaciar.onclick = borrar;
    function borrar(){
        cantidad.value = ""
        azul.innerHTML ="Total a Pagar $" 
        }