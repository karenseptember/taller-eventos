let boton = document.querySelector(".botoncito");
let div = document.querySelector("div");


boton.addEventListener("click",() =>{
    alert("Hola!");
})

// Aplique el metodo remove al evento que esta saltando como error
div.addEventListener.remove("click", () =>{
    alert("Hola! Soy el div");
})

