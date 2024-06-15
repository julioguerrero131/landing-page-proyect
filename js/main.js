const myform = document.getElementById('formulario'); 
let mapa = new Map();
let juegos = ['doom','minecraft','hollow knight'];

const submitValues = () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectElement = document.getElementById('juego-escogido').value;

    const datos = {
        nombre: name,
        email: email,
        selectElement: selectElement
    }

    fetch('https://my-first-project-13f4b-default-rtdb.firebaseio.com/collection.json',{
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'content-type': 'application/json'
        }
    }).then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
        })
        .catch(error => console.log(error))

}

const processData = async () => {
    const url = 'https://my-first-project-13f4b-default-rtdb.firebaseio.com/collection.json';
    const respuesta = await fetch(url);
    
    if(!respuesta.ok) {
        console.error('Error: ', respuesta.status);
        return;
    }
        
    const datos = await respuesta.json();
        
    // Procesar datos
    for (let i=1; i<=juegos.length; i++) {
        mapa[i] = 0;
    }

    for (const clave in datos){
        let voto = datos[clave]
        let value = voto['selectElement']
        mapa[value] += 1
    }
    
    const conteos = document.querySelectorAll('p.voto-number');
    conteos.forEach((conteo, index) => {
        conteo.textContent = mapa[index+1];
    });

}

const loaded = ( eventLoaded ) => {   
  
    myform.addEventListener('submit', ( eventSubmit ) => { 
        eventSubmit.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const selectElement = document.getElementById('juego-escogido');

        let nammeValue =  name.value;
        let emailValue = email.value;

        if( nammeValue.length == 0 ) {
            name.focus()
            alert('Ingrese un nombre válido')
            return;
        }

        if(emailValue.length == 0) {
            email.focus()
            alert('Ingrese un correo válido')
            return;
        }

        if(selectElement.value == "Selecciona un Juego") {
            selectElement.focus()
            alert('Ingrese un voto válido')
            return;
        }

        submitValues();
        processData();
  
    })

    processData();

}

window.addEventListener("DOMContentLoaded", loaded);