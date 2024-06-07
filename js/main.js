let myform = document.getElementById('formulario');
let name = document.getElementById('name');
let email = document.getElementById('email');

let loaded = ( eventLoaded ) => {
  
    
  
    myform.addEventListener('submit', ( eventSubmit ) => { 
        eventSubmit.preventDefault();

        let nammeValue =  name.value;
        let emailValue = email.value;

        if( nammeValue.length == 0 ) {
            name.focus()
            alert('Ingrese un nombre válido')
            return;
        }
    
        if( nammeValue.length == 0 ) {
            name.focus()
            alert('Ingrese un nombre válido')
            return;
        }

        debugger;
  
    })
  
}

window.addEventListener("DOMContentLoaded", loaded);

let submitValues = () {

}