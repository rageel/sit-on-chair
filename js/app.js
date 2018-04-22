document.addEventListener("DOMContentLoaded", function(){

const dropdown = document.querySelector('.dropdown');
const navDropdown = document.querySelector('.nav_span');

navDropdown.addEventListener('mouseover', function() {
    dropdown.classList.add('visible');
})
navDropdown.addEventListener('mouseout', function() {
    dropdown.classList.remove('visible');
})

const smallBox = document.querySelectorAll('.small_box');
const backgroundLine = document.querySelectorAll('.background_line');

for (let i = 0; i < smallBox.length; i++) {
    smallBox[i].addEventListener('mouseover', function() {
        backgroundLine[i].classList.add('hide');
    })
}

for (let i = 0; i < smallBox.length; i++) {
    smallBox[i].addEventListener('mouseout', function() {
        backgroundLine[i].classList.remove('hide');
    })
}

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const photos = document.querySelectorAll('.photos li');

let counter = 0;

photos[counter].classList.add('visible');

arrowRight.addEventListener('click', function() {
    photos[counter].classList.remove('visible');
    if (counter >= photos.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    photos[counter].classList.add('visible');
})

arrowLeft.addEventListener('click', function() {
    photos[counter].classList.remove('visible');
    if (counter == 0) {
        counter = photos.length - 1;
    } else {
        counter--;
    }
    photos[counter].classList.add('visible');
})



    function Chair(name, price) {
        this.name = name;
        this.price = price;
    }
    const clair = new Chair('Clair', 600);
    const margarita = new Chair('Margarita', 800);
    const selena = new Chair('Selena', 1000);
    let transport = 0;
    const chairArray = [clair, margarita, selena];

    const listArrow = document.querySelectorAll('.list_arrow');
    const listPanel = document.querySelectorAll('.list_panel');

    //rozwijanie list
    for (let i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener('click', function() {
            listPanel[i].classList.toggle('visible');
        })
    }

    const form = document.querySelector('.form');
    const listPanelLi = form.children[0].children[2].children;
    const listPanelChair = form.children[0].children[2].children;
    const listPanelColor = form.children[1].children[2].children;
    const listPanelFabric = form.children[2].children[2].children;
    const panelLeft = document.querySelector('.panel_left');
    const titleName = panelLeft.firstElementChild;
    const colorValue = panelLeft.children[1];
    const fabricValue = panelLeft.children[2];
    const transportValue = panelLeft.children[3];
    const transportCheckbox = document.querySelector('#transport');
    const panelRight = document.querySelector('.panel_right');
    const transportPrice = panelRight.children[3];
    const chairPrice = panelRight.children[0];
    const colorPrice = panelRight.children[1];
    const fabricPrice = panelRight.children[2];
    const sumFinal = document.querySelector('.sum strong');
    let chosenChairPrice = 0;




    //stworzenie listy ul z nazwami foteli
    for (let i = 0; i < listPanelLi.length; i++) {
        listPanelLi[i].innerText = chairArray[i].name;
        listPanelLi[i].dataset.price = chairArray[i].price;
        listPanelLi[i].addEventListener('click', function() {
            chosenChairPrice = chairArray[i].price;
            updatePrice();
            this.parentElement.classList.toggle('visible');
        })
    }

    function updatePrice() {
        sumFinal.innerText = chosenChairPrice + transport;
    }

    //wybór fotela, wstawienie nazwy w panelLeft
    for (let i = 0; i < listPanelChair.length; i++) {
        listPanelChair[i].addEventListener('click', function() {
            titleName.innerText = 'Chair ' + this.innerText;
        })
    }

    //wstawienie ceny fotela w panelLeft
    for (let i = 0; i < listPanelChair.length; i++) {
        listPanelChair[i].addEventListener('click', function() {
            chairPrice.innerText = chairArray[i].price;
        })
    }
    //wstawienie ceny materiału
    for (let i = 0; i < listPanelFabric.length; i++) {
        listPanelFabric[i].addEventListener('click', function() {
            fabricValue.innerText = this.innerText;
            fabricPrice.innerText = 0;
        })
    }
    //wstawienie ceny koloru
    for (let i = 0; i < listPanelColor.length; i++) {
        listPanelColor[i].addEventListener('click', function() {
            colorValue.innerText = this.innerText;
            colorPrice.innerText = 0;
        })
    }
    //wstawienie transportu i ceny transportu
    transportCheckbox.addEventListener('click', function() {
        transportCheckbox.classList.toggle('ordered');
        if ( transportCheckbox.classList.contains('ordered') ) {
            transportValue.innerText = 'Transport';
            transportPrice.innerText = 80;
            transport = 80;
        } else {
            transportValue.innerText = '';
            transportPrice.innerText = '';
            transport = 0;
        }
        updatePrice();
    })


})
