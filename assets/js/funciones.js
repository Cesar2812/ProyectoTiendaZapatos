
/*Eventos Click de la barra de navegacion para vista de escritorio*/
/*evento click para la aparcion de la barra de busqueda */
let searchForm = document.querySelector('.search-form');
/*Evento click  que al tocar el icono de la lupa para que  aparezca la barra de busqueda */
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    barra_navegacion.classList.remove('active');
    login.classList.remove('active');
    shoppingcard.classList.remove('active');
}

/*evento click para la aparicion del carrito de compras */
let shoppingcard = document.querySelector('#shopping-cart');
/*Evento click  que al tocar el icono del carrito aparezca la ventana de items añdidos al carrito */
document.querySelector('#cart-btn').onclick = () => {
    shoppingcard.classList.toggle('active');
    searchForm.classList.remove('active');
    barra_navegacion.classList.remove('active');
    login.classList.remove('active');
}
/*evento click para la aparicion de la ventana de logueo */
let login = document.querySelector('.login');
/*Evento click  que al tocar el icono del usuario  aparezca la ventana de logueo */
document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    barra_navegacion.classList.remove('active');
    shoppingcard.classList.remove('active');
}
/*Fin de los eventos de la barra de navegacion para vista de escritorio*/






/*Eventos click de la barra de navegacion para vista movil unicamente el bton de menu de las tres rayitas*/
let barra_navegacion = document.querySelector('.barra_navegacion');
/*Evento click  del bton de las tres rayitas sobre la vista movil */
document.querySelector('#menu-btn').onclick = () => {
    barra_navegacion.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    shoppingcard.classList.remove('active');
}


/*Evento que al abrir una ventana desaparezcas la otra*/
window.onscroll = () => {
    searchForm.classList.remove('active');
    barra_navegacion.classList.remove('active');
    login.classList.remove('active');
    shoppingcard.classList.remove('active');
}


/*Seccion de Productos*/
/*Evento de slider con el mause sobre los productos*/
var swiper = new Swiper(".producto-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: true,
    },
    centeredSlides: false,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});




/*Seccion de Personal*/
/*Evento de slider con el mause sobre los Trabajadores*/
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: false,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});





/*Evento para agregar al carrito de compras*/
const carrito = document.getElementById('shopping-cart');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn = document.getElementById('vaciar-carrito');

CargarEventoListeners();

function CargarEventoListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarelemento);
    vaciarCarritobtn.addEventListener('click', Vaciarcarrito);
}

function comprarElemento(e) {
    // e.preventDefault();
    // if (e.target.classList.contains('agregar-carrito')) {
    //     const elemento = e.target.parentElement.parentElement;
    //     console.log(elemento);
    //     leerdatosElemento(elemento);
    // }
    console.log(e);
}

function agregarCarritoTest(item) {
    console.log('agregar carrito :::::', item);
    insertarCarrito(infoElemento);
}

/*Mensaje al agregar Producto*/
function most() {
    swal('Producto Agregado','','success');
}

function leerdatosElemento(elemento) {
    
    var infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    console.log(infoElemento);

   
    insertarCarrito(infoElemento);
}


function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width=70% />
    </td>

    <td>
        ${elemento.titulo} 
    </td>

    <td>
    ${elemento.precio}
    </td>

    <td>
        <a href="#" class="fas fa-trash" data-id="${elemento.id}"></a>
    </th>
    `;
    most();
    lista.appendChild(row);
}

function eliminarelemento(e) {
    e.preventDefault();
    let elemento,
        elemntoId;

    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elemntoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function Vaciarcarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}















