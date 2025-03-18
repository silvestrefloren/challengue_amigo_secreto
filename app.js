const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado =document.getElementById("resultado")

function agregarAmigo(){
  
    if(inputAmigo.value === ""){
        alert("Por favor, ingrese un nombre antes de añadir");
        return;
    }
    listaAmigos.push(inputAmigo.value); 
    //?ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value; 
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
    inputAmigo.value = "";
}

function sortearAmigo(){
    if(listaAmigos.length === 0){
        ulResultado.innerHTML = "<li>no hay amigos en la lista</li>";
        return;
    }
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`

}
