let personas=["Cristi", "Pau", "Maria Ana", "Edgardo", "Chuna", "Fabi", "Nina", "Chivis", "Sia", "Papá Chuy", "Manuel", "Fer", "Paco"]; 
function elegir(){
let aleatorio=Math.floor(Math.random()*14)
    console.log(personas[aleatorio])
    document.getElementById("inicio").innerText=personas[aleatorio]
}