// ## Normas del ejercicio

// - El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos.
// - Los caracteres disponibles son:

// ```
//   ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
// ```

// - En la parte de STRENGTH tenemos 4 valores posibles:

//   - TOO SHORT: Este valor aparecerá siempre que el password tenga 5 o menos caracteres.
//   - WEAK:Este valor aparecerá si el range es superior a 5 y menor de 10.
//   - MEDIUM: Este valor aparecerá si el range es superior a 10 y menor a 15.
//   - STRENGTH: Este valor aparecerá si el range es superior a 15.

// - El botón SÓLO se podrá pulsar cuando la longitud sea mayor de 5

// ## Pistas y pasos a seguir

// - Crear las 2 cajas iniciales
// - Poner los textos
// - Sincronizar el length del nuevo password con el input range
// - Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

// ## Principios Importantes para la creación de aplicaciones.

// - Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas.


const rangeElement = document.getElementById('range');

const labelElement = document.getElementById('label');

const strengthElement = document.getElementById('strength-values');

const passwordGenerate = document.getElementById('password');

const buttonElement = document.getElementById('button-generate');

const charactersElement = 'ACDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let passwordLength = 0;

rangeElement.addEventListener('mousemove', event => {
  labelElement.textContent = event.target.value;

  if (event.target.value <= 5){
    strengthElement.textContent = 'TOO SHORT';
  } else if (event.target.value > 5 && event.target.value < 10){
    strengthElement.textContent = 'WEAK';
  } else if (event.target.value > 10 && event.target.value < 15){
    strengthElement.textContent = 'MEDIUM';
  } else if (event.target.value > 15){
    strengthElement.textContent = 'STRENGTH';
  }

  if(event.target.value <= 5){
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }

  passwordLength = event.target.value;
  
});

buttonElement.addEventListener('click', () =>{
    passwordGenerate.value = '';
    
    for (let i= 0; i < passwordLength; i ++){
        const random = Math.floor(Math.random() * charactersElement.length);
        passwordGenerate.value += charactersElement.charAt(random);

    };

});






