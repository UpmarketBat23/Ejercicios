// ejercicios

(function(){
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){
        const number = document.querySelector('#numero');
        const number2 = document.querySelector('#numero2');
        const resultado = document.querySelector('#resultado');
        const sumar = document.querySelector('#sumar');
        const restar = document.querySelector('#restar');
        const multiplicar = document.querySelector('#multiplicar');
        const dividir = document.querySelector('#dividir');

        sumar.addEventListener('click', calcular1);

        function calcular1(event) {
            event.preventDefault();
            const valor1 = number.value,
                  valor2 = number2.value
            

            const resultado = (valor1 + valor2);

            console.log(resultado)
        }
    });

}());
