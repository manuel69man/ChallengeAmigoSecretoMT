// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaramos un array sin elementos.
let amigos=[];
let arrayElementosLista=[];
let listadeAmigos = document.getElementById("listaAmigos");


function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo.length!=0) { //Nos aseguramos que exita un nombre valido
        console.log(amigo);
        if (amigos.includes(amigo)){ //nos aseguramos que no este duplicado

            alert("El nombre no puede estar duplicado, intentalo de nuevo")
            limpiarAmigo();
        } else{
            amigos.push(amigo);
            listadeAmigos.innerHTML="";
            for (i=0; i<amigos.length;i++){ //iteramos amigos para insertar en la lista a mostrar
                let elemntoDeLista = document.createElement('li');
                let nodoLista = document.createTextNode(amigos[i]);
                elemntoDeLista.appendChild(nodoLista);
                listadeAmigos.appendChild(elemntoDeLista);
            }
            limpiarAmigo();
        }   
    } else {
        alert("Por favor, ingrese un nombre válido");
    }
}

function limpiarAmigo(){
    let amigo = document.getElementById("amigo");
    amigo.value="";
}