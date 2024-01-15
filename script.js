"use strict"

const palabras = [
  "casa", "perro", "gato", "lago", "libro", "playa", "tren", "fuerte", "nube", "viento",
  "lápiz", "rojo", "verde", "blanco", "cielo", "coche", "mesa", "silla", "oro", "puerta",
  "flor", "árbol", "fruta", "agua", "nadar", "jugar", "comer", "bailar", "canto", "nadie",
  "música", "feliz", "triste", "bravo", "sabor", "beso", "risa", "abrazo", "hablar", "oído",
  "mano", "dedo", "pie", "pelo", "lindo", "dulce", "fuerte", "dulce", "joven", "viejo",
  "niño", "niña", "playa", "monte", "nieve", "sol", "luna", "estrella", "planeta", "serio",
  "broma", "dado", "carta", "papel", "reloj", "tiempo", "norte", "sur", "este", "oeste",
  "río", "mar", "oro", "plata", "bronce", "cobre", "hierro", "metal", "madera", "vidrio",
  "plástico", "naranja", "manzana", "uva", "limón", "verde", "azul", "negro", "blanco", "rosa",
  "amor", "odio", "paz", "guerra", "risa", "llanto", "frío", "calor", "vida", "muerte"
]

// palabra aleatoria 
const palabra = palabras[Math.floor(Math.random() * 100)]
console.log(palabra)
const arrayPalabra = palabra.split("")
const paraAdivinar = document.querySelector(".aElegir")
const listadeInputs = document.querySelector(".listadeInputs")
paraAdivinar.textContent = "_".repeat(palabra.length)


  



