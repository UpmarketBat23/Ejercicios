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
        restar.addEventListener('click', calcular2);
        multiplicar.addEventListener('click', calcular3);
        dividir.addEventListener('click', calcular4);

        function calcular1(event) {
            event.preventDefault();
                const valor1 = parseInt(number.value),
                      valor2 = parseInt(number2.value)
                
            const resultado1 = (valor1 + valor2);

            console.log(resultado1);
            const resuSum = document.querySelector('#resultado');
            resuSum.value = resultado1
        }
        function calcular2(event) {
            event.preventDefault();
                const valor1 = parseInt(number.value),
                      valor2 = parseInt(number2.value)
                
            const resultado2 = (valor1 - valor2);

            console.log(resultado2);
            const resuRest = document.querySelector('#resultado');
            resuRest.value = resultado2;
        }
        function calcular3(event) {
            event.preventDefault();
                const valor1 = parseInt(number.value),
                      valor2 = parseInt(number2.value)
                
            const resultado3 = (valor1 * valor2);

            console.log(resultado3);
            const resuMul = document.querySelector('#resultado');
            resuMul.value = resultado3;
        }
        function calcular4(event) {
            event.preventDefault();
                const valor1 = parseInt(number.value),
                      valor2 = parseInt(number2.value)
                
            const resultado4 = (valor1 / valor2);

            console.log(resultado4);
            const resuDiv = document.querySelector('#resultado');
            resuDiv.value = resultado4;
        }



    });

}());
