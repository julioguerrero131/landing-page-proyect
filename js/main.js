let loaded = ( eventLoaded ) => {
  
    let myform = document.getElementById('formulario');
  
    myform.addEventListener('submit', ( eventSubmit ) => { 
        eventSubmit.preventDefault();

        let element1Value = element1.value;

        if( element1Value.length == 0 ) {
            element1.focus()
            alert('Ingrese un texto válido')
            return;
        }
    
        debugger;
  
    })
  
}

window.addEventListener("DOMContentLoaded", loaded);
