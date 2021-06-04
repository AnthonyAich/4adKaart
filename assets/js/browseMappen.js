'use strict';

//schermInfo
let scherm = {
    actief: ".bier",
    container: "bieren",
    taal: "nl",
    nummer: 0
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

//api URL's
const bierAPI = ['assets/js/bierAPI.json']
const warmAPI = ['assets/js/warmAPI.json']

//klikken op navbar //!(begin)
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
//klikken op navbar //!(einde)


//initialiseren nav voor geselecteerde taal
function navTaal() {
    if (scherm.taal === 'nl') {
        document.querySelector('.bier').innerHTML = nlNav[0];
        document.querySelector('.warm').innerHTML = nlNav[2];
        document.querySelector('.hapje').innerHTML = nlNav[3];
        document.querySelector('.frisdrank').innerHTML = nlNav[1];
    }

    if (scherm.taal === 'fr') {
        document.querySelector('.bier').innerHTML = frNav[0];
        document.querySelector('.warm').innerHTML = frNav[2];
        document.querySelector('.hapje').innerHTML = frNav[3];
        document.querySelector('.frisdrank').innerHTML = frNav[1];
    }

    if (scherm.taal === 'en') {
        document.querySelector('.bier').innerHTML = enNav[0];
        document.querySelector('.warm').innerHTML = enNav[2];
        document.querySelector('.hapje').innerHTML = enNav[3];
        document.querySelector('.frisdrank').innerHTML = enNav[1];
    }
}


//vlag geselecteerde taal setten
function vlagGeselecteerdeTaal() {

    if (scherm.taal === 'nl') {
        document.querySelector('.geselecteerdeTaal').src = 'assets/images/be.png';
    }

    if (scherm.taal === 'fr') {
        document.querySelector('.geselecteerdeTaal').src = 'assets/images/fr.png';
    }

    if (scherm.taal === 'en') {
        document.querySelector('.geselecteerdeTaal').src = 'assets/images/en.png';
    }

}

function taalAanpassenSchermpje() {
    if(scherm.nummer === 0) {

    document.querySelector('.taal').style.height = "105px";
    document.querySelector('.taal').style.borderRadius = "20px";

    let vlaggen;
    scherm.nummer = 1;
    if (scherm.taal === 'nl') {
        vlaggen = ` <img class="geselecteerdeTaal nederlandsK" onclick="taalAanpassen('nl')"  src="assets/images/be.png" alt="" />
        <img src="assets/images/ArrowDown.png" alt="" />
        <img class="geselecteerdeTaal engelsK" onclick="taalAanpassen('en')" src="assets/images/en.png" alt="" />
        <img src="" alt="" />
        <img class="geselecteerdeTaal fransK" src="assets/images/fr.png" onclick="taalAanpassen('fr')" alt="" />
        <img src="" alt="" />`;
    }

    if (scherm.taal === 'en') {
        vlaggen = ` <img class="geselecteerdeTaal engelsK" onclick="taalAanpassen('en')" src="assets/images/en.png" alt="" />
        <img src="assets/images/ArrowDown.png" alt="" />
        <img class="geselecteerdeTaal nederlandsK" onclick="taalAanpassen('nl')" src="assets/images/be.png" alt="" />
        <img src="" alt="" />
        <img class="geselecteerdeTaal fransK" onclick="taalAanpassen('fr')" src="assets/images/fr.png" alt="" />
        <img src="" alt="" />`;
    }

    if (scherm.taal === 'fr') {
        vlaggen = ` <img class="geselecteerdeTaal fransK" onclick="taalAanpassen('fr')" src="assets/images/fr.png" alt="" />
        <img src="assets/images/ArrowDown.png" alt="" />
        <img class="geselecteerdeTaal nederlandsK" onclick="taalAanpassen('nl')" src="assets/images/be.png" alt="" />
        <img src="" alt="" />
        <img class="geselecteerdeTaal engelsK" onclick="taalAanpassen('en')" src="assets/images/en.png" alt="" />
        <img src="" alt="" />`;
    }

    document.querySelector('.taal').innerHTML = vlaggen;
 }
}

function taalAanpassen(taal) {
    let vlag = '<img class="geselecteerdeTaal" src="assets/images/be.png" alt="" > <img src="assets/images/ArrowDown.png" alt="" />';
    document.querySelector('.taal').innerHTML = vlag;
    document.querySelector('.taal').style.height = "35px";
    document.querySelector('.taal').style.borderRadius = "40px";
    scherm.taal = taal;
    init();
      setTimeout(function(){ scherm.nummer = 0; }, 1500);

}

function init() {
    document.querySelector('.bier').addEventListener("click", bier);
    document.querySelector('.warm').addEventListener("click", warm);
    document.querySelector('.hapje').addEventListener("click", hapjes);
    document.querySelector('.frisdrank').addEventListener("click", frisdrank);

    document.querySelector('.taal').addEventListener("click", taalAanpassenSchermpje);

    navTaal();
    vlagGeselecteerdeTaal();

    // fetch('assets/js/apiMenu.json')
    //     .then(res => res.json())
    //     .then(data => {let lengte = data.data.length;});
    //     console.log(lengte);


// api url

//taal voor API Def
let taalAPInr;
if(scherm.taal === 'nl') {
    taalAPInr = 0;
}
if(scherm.taal === 'fr') {
    taalAPInr = 1;
}
if(scherm.taal === 'en') {
    taalAPInr = 2;
}
let api_url;
if(scherm.container === 'bieren') {
    api_url = bierAPI[taalAPInr];
}
if(scherm.container === 'warm') {
    api_url = warmAPI[taalAPInr];
}

  
// Defining async function
async function getapi(url) {
    
    // Storing response
    let response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
    console.log(data);
    if (response) {
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
// Function to define innerHTML for HTML table
function show(data) {
    let tab = ""
    
    // Loop to access all rows 
    for (let r of data.data) {
        tab += `      <div class="item">
        <div class="foto">
          <img src="${r.img}" alt="" />
        </div>
        <div class="info">
          <p class="titel">${r.naam}</p>
          <p class="graden">(${r.graden}% vol.)</p>
          <p class="prijs">€ ${r.prijs}</p>
        </div>
      </div>`;
    }
    // Setting innerHTML as tab variable
    document.querySelector(".container").innerHTML = tab;
}
}
window.onload = init;