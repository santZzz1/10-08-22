let boton = document.querySelector('button')
let parrafo = document.querySelector('p')
let contador = 0 
let reiniciar = document.getElementById('form').reset()
boton.addEventListener('click',()=>{
    
    boton.style.backgroundColor ='rgb(0, 238, 255)'
    contador = contador + 1
    parrafo.textContent =contador
})
const log = document.getElementById('log');
const input = document.querySelector('input');

input.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

var form = document.getElementById("form");
form.addEventListener("focus",function (event) {
    event.target.style.backgroundColor= 'red';
}, true);
form.addEventListener("blur",function (event) {
    event.target.style.backgroundColor= 'red'
}, true);