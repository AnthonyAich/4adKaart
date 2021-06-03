'use strict';

let scherm = {
    actief: ".bier",
    container: ".bieren",
    taal: "nl"
};

//nav en containers
let bierArray = ['.bier', '.bieren'];
let hapjesArray = ['.hapje', '.hapjes'];
let frisdrankenArray = ['.frisdrank', '.frisdrankenContent'];
let warmArray = ['.warm', '.warmContent'];

//taal nav
let nlNav = ['Bieren', 'Frisdranken', 'warme Dranken', 'Hapjes'];
let frNav = ['Bières', 'Boissons sans alcool', 'Boissons chaudes', 'Snacks'];
let enNav = ['Beers', 'Soft Drinks', 'Hot Drinks', 'Snacks'];

function bier() {
    document.querySelector(scherm.actief).classList.remove('actief');
    document.querySelector(bierArray[0]).classList.add('actief');

    scherm.actief = bierArray[0];
}

function hapjes() {
    document.querySelector(scherm.actief).classList.remove('actief');
    document.querySelector(hapjesArray[0]).classList.add('actief');

    scherm.actief = hapjesArray[0];
}

function frisdrank() {
    document.querySelector(scherm.actief).classList.remove('actief');
    document.querySelector(frisdrankenArray[0]).classList.add('actief');

    scherm.actief = frisdrankenArray[0];
}

function warm() {
    document.querySelector(scherm.actief).classList.remove('actief');
    document.querySelector(warmArray[0]).classList.add('actief');

    scherm.actief = warmArray[0];
}

function init() {
    document.querySelector('.bier').addEventListener("click", bier);
    document.querySelector('.warm').addEventListener("click", warm);
    document.querySelector('.hapje').addEventListener("click", hapjes);
    document.querySelector('.frisdrank').addEventListener("click", frisdrank);

    if (scherm.taal === 'nl') {
        document.querySelector('.bier').innerHTML = nlNav[0];
        document.querySelector('.warm').innerHTML = nlNav[1];
        document.querySelector('.hapje').innerHTML = nlNav[2];
        document.querySelector('.frisdrank').innerHTML = nlNav[3];
    }

    if (scherm.taal === 'fr') {
        document.querySelector('.bier').innerHTML = frNav[0];
        document.querySelector('.warm').innerHTML = frNav[1];
        document.querySelector('.hapje').innerHTML = frNav[2];
        document.querySelector('.frisdrank').innerHTML = frNav[3];
    }

    if (scherm.taal === 'en') {
        document.querySelector('.bier').innerHTML = enNav[0];
        document.querySelector('.warm').innerHTML = enNav[1];
        document.querySelector('.hapje').innerHTML = enNav[2];
        document.querySelector('.frisdrank').innerHTML = enNav[3];
    }

    fetch('assets/js/apiMenu.json')
        .then(res => res.json())
        .then(data => console.log(data));

}
window.onload = init;