// hacer oscuro y mostrar ingredientes
function darken(element) {
    if (window.innerWidth > 768) {
        element.querySelector('.product-image').style.filter = 'brightness(30%)';
        element.querySelector('.ingredients').classList.remove('hidden');
    }
}

// revertir color oscuro y ocultar ingredientess
function undarken(element) {
    if (window.innerWidth > 768) {
        element.querySelector('.product-image').style.filter = 'brightness(100%)';
        element.querySelector('.ingredients').classList.add('hidden');
    }
}

// Categorias y otras
function toggleIngredients(element) {
    const ingredients = element.querySelector('.ingredients');
    const image = element.querySelector('.product-image');
    const productDetails = element.querySelector('.product-details');
    const overlay = element.querySelector('.overlay');

    if (ingredients.classList.contains('hidden')) {
        ingredients.classList.remove('hidden');
        image.style.filter = 'brightness(30%)';
        overlay.style.opacity = '0.5'; 
    } else {
        ingredients.classList.add('hidden');
        image.style.filter = 'brightness(100%)';
        overlay.style.opacity = '0';
    }
}
document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', () => toggleIngredients(item));
});





// Categorias
document.addEventListener('DOMContentLoaded', function() {
    const categorias = document.querySelectorAll('nav ul li a');

    const seccionPromo = document.querySelector('.promo');

    categorias.forEach(function(categoria) {
        categoria.addEventListener('click', function(event) {
            event.preventDefault();

            const categoriaSeleccionada = this.textContent.trim();

            // ocultar seccion prmooo
            if (categoriaSeleccionada !== "Inicio") {
                seccionPromo.style.display = 'none';
            } else {
                seccionPromo.style.display = 'block';
            }

            // no mostrar los productos
            const productos = document.querySelectorAll('.product');
            productos.forEach(function(producto) {
                producto.style.display = 'none';
            });

            //mostrar la categoria
            const productosCategoria = document.querySelectorAll(`.product[data-category="${categoriaSeleccionada}"]`);
            productosCategoria.forEach(function(producto) {
                producto.style.display = 'block';
            });
        });
    });
});


// Refrescar la pagina con el Inicio
document.addEventListener('DOMContentLoaded', function() {
    const inicio = document.querySelector('nav ul li:first-child a');

    inicio.addEventListener('click', function(event) {
        location.href = location.href; 
    });
});


