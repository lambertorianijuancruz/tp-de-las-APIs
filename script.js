let key = "nrqd2JIJq8VpDeeKgMcPujUrJgL8qVvZlrtHymxw";        
//emAX7kURdpbL53UttDOLM2dhrthdEzYY3BtUbhG

let imagendeldía = document.querySelector("#imagendeldía");
let boton = document.querySelector("#boton");
let titulo = document.querySelector("h1");

boton.onclick = function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(res => res.json())
        .then(fotodeldía => {
            imagendeldía.src = fotodeldía.hdurl;
            titulo.textContent = fotodeldía.title;
        });
};


let imagenfecha = document.querySelector("#imagenfecha");
let botonfecha = document.querySelector("#botonfecha");
let fechausuario = document.querySelector("#fecha");

botonfecha.onclick = function() {
    const fecha = fechausuario.value;
    console.log(fecha);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fecha}`)
        .then(res => res.json())
        .then(fotofecha => {
            imagenfecha.src = fotofecha.hdurl;
        })
        .catch(err => {
            console.error('Error al obtener los datos:', err);
        });
};
