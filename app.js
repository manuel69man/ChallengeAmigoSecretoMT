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

function limpiarAmigo(){
    let amigo = document.getElementById("amigo");
    amigo.value="";
}

function sortearAmigo(){
    //Usamos getElementById para accesar al objeto de document resultado
    let resulatadoObjeto = document.getElementById("resultado");
    // Validamos que existan amigos en el array
    if (amigos.length>0){
        // Generamos el amigo aleatoriamente usando Math.tandom y Math.floor
        let posAmigoSorteado = parseInt(Math.floor(Math.random()*amigos.length));
        let amigoSorteado= amigos[posAmigoSorteado];
        //Mostramos el amigo secreto usando innerHTML
        resulatadoObjeto.innerHTML="Tu Amigo secreto es: "+amigoSorteado;

        resetJuego();



    }else {
        /*Si el array de amigos esta vacio, quiere decir que o no hemos jugado o queremos sortear otro amigo
        por lo que nos aseguramos que este mostrando un amigo secreto viejo, de esta manera podemos jugar las veces que queramos*/
        resulatadoObjeto.innerHTML="";
    } 
}

function resetJuego(){
    amigos=[];
    listadeAmigos.innerHTML="";

}