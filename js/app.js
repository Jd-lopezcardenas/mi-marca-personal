// MENÚ MÓVIL
const botonMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

botonMenu.addEventListener("click", () => {

    menu.classList.toggle("hidden");

});


// CERRAR MENÚ
const enlacesMenu = document.querySelectorAll("#menu a");

enlacesMenu.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        if (window.innerWidth < 768) {
            menu.classList.add("hidden");
        }

    });

});


// FILTRO DE PROYECTOS
const botonesFiltro = document.querySelectorAll("[data-filter]");
const proyectos = document.querySelectorAll("[data-category]");

botonesFiltro.forEach((boton) => {

    boton.addEventListener("click", () => {

        const filtro = boton.dataset.filter;

        proyectos.forEach((proyecto) => {

            const categoria = proyecto.dataset.category;

            if (filtro === "todos" || filtro === categoria) {

                proyecto.classList.remove("hidden");

            } else {

                proyecto.classList.add("hidden");

            }

        });

    });

});


// AÑO AUTOMÁTICO
const anio = document.querySelector("#anio");

anio.textContent = new Date().getFullYear();
