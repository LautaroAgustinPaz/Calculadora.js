let pantalla = document.querySelector('#pantalla')
let botones = document.querySelectorAll('.btns')

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(pantalla.textContent, pantalla.textContent.length);

        const botonApretado = boton.textContent;

        if ( boton.id === "c") {
            pantalla.textContent = "0";
            return
        }

        if ( boton.id === "borrar") {
            if (pantalla.textContent.length <= 1 || pantalla.textContent === "Error!") {
                // caso 1 - Reinicio por error (LENGTH = 1 ES -> 0)
                pantalla.textContent = "0"; 
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                }
            return;
        }

        if (boton.id === "resultado") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            // caso 1 - REEMPLAZA SI PASAN LOS DOS CASOS
            pantalla.textContent = botonApretado;
        } else {
            // caso 2 - AGREGA VALOR
            pantalla.textContent += botonApretado;
        }
    });
})
