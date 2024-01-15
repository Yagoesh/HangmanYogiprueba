"use strict"

const palabras = [
  "casa", "perro", "gato", "lago", "libro", "playa", "tren", "fuerte", "nube", "viento",

  // "lápiz", 
  "rojo", "verde", "blanco", "cielo", "coche", "mesa", "silla", "oro", "puerta",
  "flor", 
  // "árbol", 
  "fruta", "agua", "nadar", "jugar", "comer", "bailar", "canto", "nadie",
  // "música", 
  "feliz", "triste", "bravo", "sabor", "beso", "risa", "abrazo", "hablar", 
  // "oído",
  "mano", "dedo", "pie", "pelo", "lindo", "dulce", "fuerte", "dulce", "joven", "viejo",
  "niño", "niña", "playa", "monte", "nieve", "sol", "luna", "estrella", "planeta", "serio",
  "broma", "dado", "carta", "papel", "reloj", "tiempo", "norte", "sur", "este", "oeste",
  // "río", 
  "mar", "oro", "plata", "bronce", "cobre", "hierro", "metal", "madera", "vidrio",
  // "plástico", 
  "naranja", "manzana", "uva", "limón", 
  "verde", "azul", "negro", "blanco", "rosa",
  "amor", "odio", "paz", "guerra", "risa", "llanto", 
  // "frío", 
  "calor", "vida", "muerte"
].map(palabra => palabra.toUpperCase())

const paraAdivinar = document.querySelector(".adivinar")
const letras = document.querySelectorAll(".letra")
console.log(letras)
const acierto = document.querySelector(".acierto")
const perdiste = document.querySelector(".teclado .perdiste")
const ganaste = document.querySelector(".teclado .ganaste")
const cajaGanadora = document.querySelector(".cajaGanadora")
const cajaPerdedora = document.querySelector(".cajaPerdedora")
const reinicio = document.querySelector(".reset")

// palabra aleatoria 



const palabra = palabras[Math.floor(Math.random() * 100)]

paraAdivinar.textContent = "_".repeat(palabra.length)
// const palabraa = palabras[Math.floor(Math.random() * 100)]
// console.log(palabraa)

let victoria = false
let indices = []
function indice() {
  for(let i = 0 ; i < palabra.length ; i++) {
    if (palabraAleatoria.toUpperCase()[i] === letter) {
      indices.push(i);
      let nuevoTexto = []
      for (let i=0 ; i < palabra.length ; i++) {
        if (indices.includes(i)) {
          nuevoTexto.push(palabra[i])
        } else {
        nuevoTexto.push("_")
      }
    }
    const resultado = nuevoTexto.join("").toLocaleUpperCase()
    paraAdivinar.textContent = resultado
    if(!resultado.includes("_")){
      victoria=true
    }
  }
  console.log(victoria)
    finalDeJuego()
  }
}


function finalDeJuego() {
  if (victoria){
    numOfTries = 6
      cajaGanadora.classList.remove("invisible")
  }
  if(!victoria){ 
  acierto.classList.remove("invisible")
  setTimeout(() => {
    acierto.classList.add("invisible")
  }, 650)
  }

  // perder
  // if (numOfTries === 6){
  //   perdiste.classList.remove("invisible")
  // setTimeout(() => {
  //   perdiste.classList.add("invisible")
  // }, 650)
  // }
}




let numOfTries = 0
let letter = ""



for(const letra of letras){

  letra.addEventListener("click" , () => {
    
    
    if(numOfTries<6) {
    console.log(letra)
    letter = letra.textContent
    console.log(letter)    
    if (palabra.includes(letter)) {
      letra.classList.add("usedLetterGood");
      indice()
    }
    
     else {
      if(!letra.classList.contains("usedLetterBad")){ 
        letra.classList.add("usedLetterBad")
        numOfTries++
      const muñeco = document.querySelector(".muñeco img")
      muñeco.setAttribute("src" , `muñeco${numOfTries}.png`)
      }
    }

  }

    reset ()
  })
}
function reset () {
  if(numOfTries === 6){
       paraAdivinar.textContent = palabra
      cajaPerdedora.classList.remove("invisible")
        numOfTries = 0
  }
}

function volverAJuegar () {

 location.reload()
}

reinicio.addEventListener("click" , volverAJuegar)