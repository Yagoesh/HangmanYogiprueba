"use strict"

const palabras = [
  "casa", "perro", "gato", "lago", "libro", "playa", "tren", "fuerte", "nube", "viento", "rojo", "verde", "blanco", "cielo", "coche", "mesa", "silla", "oro", "puerta",
  "flor", "fruta", "agua", "nadar", "jugar", "comer", "bailar", "canto", "nadie", "feliz", "triste", "bravo", "sabor", "beso", "risa", "abrazo", "hablar", 
  "mano", "dedo", "pie", "pelo", "lindo", "dulce", "fuerte", "dulce", "joven", "viejo", "niño", "niña", "playa", "monte", "nieve", "sol", "luna", "estrella", "planeta", "serio",
  "broma", "dado", "carta", "papel", "reloj", "tiempo", "norte", "sur", "este", "oeste", "mar", "oro", "plata", "bronce", "cobre", "hierro", "metal", "madera", "vidrio",  "naranja", "manzana", "uva", "limón", "verde", "azul", "negro", "blanco", "rosa","amor", "odio", "paz", "guerra", "risa", "llanto", "calor", "vida", "muerte"].map(palabra => palabra.toUpperCase())

const paraAdivinar = document.querySelector(".adivinar")
const letras = document.querySelectorAll(".letra")
// const perdiste = document.querySelector(".teclado .perdiste")
// const ganaste = document.querySelector(".teclado .ganaste")
const cajaGanadora = document.querySelector(".cajaGanadora")
const cajaPerdedora = document.querySelector(".cajaPerdedora")
const reinicio1 = document.querySelector(".reset1")
const reinicio2 = document.querySelector(".reset2")



const palabra = palabras[Math.floor(Math.random() * 100)]

console.log(palabra)
paraAdivinar.textContent = "_".repeat(palabra.length)
// const palabra = palabras[Math.floor(Math.random() * 100)]
// console.log(palabra)


let numOfTries = 0
let letter = ""
let victoria = false
let indices = []
function indice() {
  for(let i = 0 ; i < palabra.length ; i++) {
    if (palabra[i] === letter) {
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
        cajaGanadora.classList.remove("invisible")
      } 
    }
    
  }
}

for(const letra of letras){
  
  letra.addEventListener("click" , () => {
    if(numOfTries<6) {
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
      
    } if (numOfTries === 6 ) {
      cajaPerdedora.classList.remove("invisible")
    }
  })
}


function volverAJuegar () {
  
  location.reload()
}

reinicio1.addEventListener("click" , volverAJuegar)
reinicio2.addEventListener("click" , volverAJuegar)

const theme = document.querySelector("header button")
const changeColor = document.querySelector('.change-color');

theme.addEventListener('click', () => { 

  if (changeColor.getAttribute("href") === "style.css") {
    changeColor.setAttribute("href", "styles.css");
  } else {
    changeColor.setAttribute("href", "style.css");
  }

})