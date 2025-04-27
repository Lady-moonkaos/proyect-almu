"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab"); // menu de prodcutos oculto//
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Remueve la clase "Active" de todos los tabs
            tabs.forEach(t => t.classList.remove("Active"));
            // Agrega la clase "Active" al tab clicado
            this.classList.add("Active");

            // Oculta todos los contenidos
            contents.forEach(content => content.classList.remove("Visible"));
            // Muestra el contenido correspondiente
            contents[index].classList.add("Visible");
        });
    });
});


//javascript carrousel imagenes//

const carrouselWrapper = document.querySelector(`.Carrousel-wrapper`)
const carrouselImg = document.querySelectorAll(`.Carrousel-img`)
const carrouselBtn = document.querySelectorAll(`.Carrousel-btn`)
const carrouselPrev = document.querySelector(`.Carrousel-arrow--prev`)
const carrouselNext = document.querySelector(`.Carrousel-arrow--next`)
const numImgs = carrouselImg.length


console.log(carrouselImg) //para ver cuantas imagenes tenemos por consola//
console.log(carrouselWrapper)

let contador = 5   //numero de imagenes

carrouselWrapper.style.width = `${100 * numImgs}%`;
carrouselWrapper.style.gridTemplateColumns = `repeat(${numImgs}, 1fr)`;



//hago click en carrousel.btn
//si el boton vale  0, contador vale 0
//si el boton es 1 contador vale 1
//si boton vale 65b contador vale 65
//si boton es posicion contador es posicion
//posicion es index - forech

//la busqueda de la lista de imagenes y su indie de posicion//

carrouselBtn.forEach((_, i) => {
    carrouselBtn[i].addEventListener(`click`, () => {
        contador = i;
        carrouselWrapper.style.transform = `translateX(-${(100 / numImgs) * contador}%)`;
    });
});

//cuando hago click en carrousel-arrow-next
//contador suma 1// los botones de debajo de las imagenes

carrouselNext.addEventListener(`click`, () => {
    contador++;


    //hacer que las imagenes vuelvan a la posicion inicial//
    
if (contador >=numImgs){
    contador = 0
}

carrouselWrapper.style.transform = `translateX(-${(100 / numImgs) * contador}%)`;
});



carrouselPrev.addEventListener(`click`, () => {
    contador++;


    //hacer que las imagenes vuelvan a la posicion inicial//
    
if (contador >=numImgs){
    contador = 0
}

carrouselWrapper.style.transform = `translateX(-${(100 / numImgs) * contador}%)`;
});







