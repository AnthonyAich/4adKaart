'use strict';

let scherm = {
  		actief: ".bier",
  		container: ".bieren",
  		taal: "nl"
};

//nav en containers
let bierArray = ['.bier','.bieren'];
let hapjesArray = ['.hapje','.hapjes'];
let frisdrankenArray = ['.frisdrank','.frisdrankenContent'];
let warmArray = ['.warm','.warmContent'];

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

fetch('assets/js/apiMenu.json')
.then(res => res.json())
.then(data => console.log(data));

}
window.onload = init;