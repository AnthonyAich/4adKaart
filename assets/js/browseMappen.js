"use strict";

//schermInfo
let scherm = {
  actief: ".bier",
  container: "bieren",
  taal: "nl",
  nummer: 0,
};

//nav en containers
let bierArray = [".bier", ".bieren"];
let hapjesArray = [".hapje", ".hapjes"];
let frisdrankenArray = [".frisdrank", ".frisdrankenContent"];
let warmArray = [".warm", ".warmContent"];
let wijnArray = [".wijn", ".wijnContent"];
let aperitiefArray = [".aperitief", ".aperitiefContent"];

//taal nav
let nlNav = [
  "Bieren",
  "Aperitief",
  "wijn",
  "Frisdranken",
  "warme Dranken",
  "Hapjes",
];
let frNav = [
  "Bières",
  "Apéritif",
  "Vin",
  "Boissons sans alcool",
  "Boissons chaudes",
  "Snacks",
];
let enNav = [
  "Beers",
  "Aperitif",
  "Wine",
  "Soft Drinks",
  "Hot Drinks",
  "Snacks",
];

//api URL's
const bierAPI = "assets/js/bierAPI.json";
const warmAPI = "assets/js/warmAPI.json";
const hapjesAPI = "assets/js/hapjesAPI.json";
const frisAPI = "assets/js/frisAPI.json";
const aperitiefAPI = "assets/js/aperitiefAPI.json";
const wijnAPI = "assets/js/wijnAPI.json";

//klikken op navbar //! (begin)
function bier() {
  document.querySelector(scherm.actief).classList.remove("actief");
  document.querySelector(bierArray[0]).classList.add("actief");
  scherm.actief = bierArray[0];
  scherm.container = "bieren";
  containerUpdate();
}

function hapjes() {
  document.querySelector(scherm.actief).classList.remove("actief");
  document.querySelector(hapjesArray[0]).classList.add("actief");
  scherm.actief = hapjesArray[0];
  scherm.container = "hapsjes";
  containerUpdate();
}

function frisdrank() {
  document.querySelector(scherm.actief).classList.remove("actief");
  document.querySelector(frisdrankenArray[0]).classList.add("actief");
  scherm.actief = frisdrankenArray[0];
  scherm.container = "frisdrank";
  containerUpdate();
}

function warm() {
  document.querySelector(scherm.actief).classList.remove("actief");
  document.querySelector(warmArray[0]).classList.add("actief");
  scherm.actief = warmArray[0];
  scherm.container = "warm";
  containerUpdate();
}

function wijn() {
  document.querySelector(scherm.actief).classList.remove("actief");
  document.querySelector(wijnArray[0]).classList.add("actief");
  scherm.actief = wijnArray[0];
  scherm.container = "wijn";
  containerUpdate();
}

function aperitief() {
  document.querySelector(scherm.actief).classList.remove("actief");
  document.querySelector(aperitiefArray[0]).classList.add("actief");
  scherm.actief = aperitiefArray[0];
  scherm.container = "aperitief";
  containerUpdate();
}
//klikken op navbar //! (einde)

//initialiseren nav voor geselecteerde taal
function navTaal() {
  if (scherm.taal === "nl") {
    document.querySelector(".bier").innerHTML = nlNav[0];
    document.querySelector(".aperitief").innerHTML = nlNav[1];
    document.querySelector(".wijn").innerHTML = nlNav[2];
    document.querySelector(".frisdrank").innerHTML = nlNav[3];
    document.querySelector(".warm").innerHTML = nlNav[4];
    document.querySelector(".hapje").innerHTML = nlNav[5];
  }

  if (scherm.taal === "fr") {
    document.querySelector(".bier").innerHTML = frNav[0];
    document.querySelector(".aperitief").innerHTML = frNav[1];
    document.querySelector(".wijn").innerHTML = frNav[2];
    document.querySelector(".frisdrank").innerHTML = frNav[3];
    document.querySelector(".warm").innerHTML = frNav[4];
    document.querySelector(".hapje").innerHTML = frNav[5];
  }

  if (scherm.taal === "en") {
    document.querySelector(".bier").innerHTML = enNav[0];
    document.querySelector(".aperitief").innerHTML = enNav[1];
    document.querySelector(".wijn").innerHTML = enNav[2];
    document.querySelector(".frisdrank").innerHTML = enNav[3];
    document.querySelector(".warm").innerHTML = enNav[4];
    document.querySelector(".hapje").innerHTML = enNav[5];
  }
}

//vlag geselecteerde taal setten
function vlagGeselecteerdeTaal() {
  if (scherm.taal === "nl") {
    document.querySelector(".geselecteerdeTaal").src = "assets/images/be.png";
  }

  if (scherm.taal === "fr") {
    document.querySelector(".geselecteerdeTaal").src = "assets/images/fr.png";
  }

  if (scherm.taal === "en") {
    document.querySelector(".geselecteerdeTaal").src = "assets/images/en.png";
  }
}

function taalAanpassenSchermpje() {
  if (scherm.nummer === 0) {
    document.querySelector(".taal").style.height = "105px";
    document.querySelector(".taal").style.borderRadius = "20px";

    let vlaggen;
    scherm.nummer = 1;
    if (scherm.taal === "nl") {
      vlaggen = ` <img class="geselecteerdeTaal nederlandsK" onclick="taalAanpassen('nl')"  src="assets/images/be.png" alt="" />
        <img src="assets/images/ArrowDown.png" alt="" />
        <img class="geselecteerdeTaal engelsK" onclick="taalAanpassen('en')" src="assets/images/en.png" alt="" />
        <img src="" alt="" />
        <img class="geselecteerdeTaal fransK" src="assets/images/fr.png" onclick="taalAanpassen('fr')" alt="" />
        <img src="" alt="" />`;
    }

    if (scherm.taal === "en") {
      vlaggen = ` <img class="geselecteerdeTaal engelsK" onclick="taalAanpassen('en')" src="assets/images/en.png" alt="" />
        <img src="assets/images/ArrowDown.png" alt="" />
        <img class="geselecteerdeTaal nederlandsK" onclick="taalAanpassen('nl')" src="assets/images/be.png" alt="" />
        <img src="" alt="" />
        <img class="geselecteerdeTaal fransK" onclick="taalAanpassen('fr')" src="assets/images/fr.png" alt="" />
        <img src="" alt="" />`;
    }

    if (scherm.taal === "fr") {
      vlaggen = ` <img class="geselecteerdeTaal fransK" onclick="taalAanpassen('fr')" src="assets/images/fr.png" alt="" />
        <img src="assets/images/ArrowDown.png" alt="" />
        <img class="geselecteerdeTaal nederlandsK" onclick="taalAanpassen('nl')" src="assets/images/be.png" alt="" />
        <img src="" alt="" />
        <img class="geselecteerdeTaal engelsK" onclick="taalAanpassen('en')" src="assets/images/en.png" alt="" />
        <img src="" alt="" />`;
    }

    document.querySelector(".taal").innerHTML = vlaggen;
  }
}

function taalAanpassen(taal) {
  let vlag =
    '<img class="geselecteerdeTaal" src="assets/images/be.png" alt="" > <img src="assets/images/ArrowDown.png" alt="" />';
  document.querySelector(".taal").innerHTML = vlag;
  document.querySelector(".taal").style.height = "35px";
  document.querySelector(".taal").style.borderRadius = "40px";
  scherm.taal = taal;
  init();
  setTimeout(function () {
    scherm.nummer = 0;
  }, 500);
}

function containerUpdate() {
  let api_url;
  if (scherm.container === "bieren") {
    api_url = bierAPI;
  }
  if (scherm.container === "warm") {
    api_url = warmAPI;
  }
  if (scherm.container === "hapsjes") {
    api_url = hapjesAPI;
  }
  if (scherm.container === "frisdrank") {
    api_url = frisAPI;
  }
  if (scherm.container === "aperitief") {
    api_url = aperitiefAPI;
  }
  if (scherm.container === "wijn") {
    api_url = wijnAPI;
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
    let tab = "";
    if (scherm.taal === "nl") {
      // Loop to access all rows
      for (let item of data.nl) {
        tab += `      <div class="item">
        <div class="info">
          <p class="titel">${item.naam}</p>
          <p class="informatie">${infoAanpassen(item.info)}</p>
          <p class="prijs">€ ${item.prijs}</p>
        </div>
      </div>`;
      }
    }
    if (scherm.taal === "fr") {
      // Loop to access all rows
      for (let item of data.fr) {
        tab += `      <div class="item">
        <div class="info">
          <p class="titel">${item.naam}</p>
          <p class="informatie">${infoAanpassen(item.info)}</p>
          <p class="prijs">€ ${item.prijs}</p>
        </div>
      </div>`;
      }
    }
    if (scherm.taal === "en") {
      // Loop to access all rows
      for (let item of data.en) {
        tab += `      <div class="item">
        <div class="info">
          <p class="titel">${item.naam}</p>
          <p class="informatie">${infoAanpassen(item.info)}</p>
          <p class="prijs">€ ${item.prijs}</p>
        </div>
      </div>`;
      }
    }

    // Setting innerHTML as tab variable
    document.querySelector(".container").innerHTML = tab;
  }
}

function infoAanpassen(info) {
  if (info.includes("n.v.t.")) {
    return " ";
  }
  if (info.includes("%")) {
    return info;
  }
  if (info === " ") {
    return " ";
  } else {
    return info + "°";
  }
}

function init() {
  document.querySelector(".bier").addEventListener("click", bier);
  document.querySelector(".warm").addEventListener("click", warm);
  document.querySelector(".hapje").addEventListener("click", hapjes);
  document.querySelector(".frisdrank").addEventListener("click", frisdrank);
  document.querySelector(".wijn").addEventListener("click", wijn);
  document.querySelector(".aperitief").addEventListener("click", aperitief);

  document
    .querySelector(".taal")
    .addEventListener("click", taalAanpassenSchermpje);

  navTaal();
  vlagGeselecteerdeTaal();

  containerUpdate();
  // fetch('assets/js/apiMenu.json')
  //     .then(res => res.json())
  //     .then(data => {let lengte = data.data.length;});
  //     console.log(lengte);

  // api url
  //taal voor API Def
}
window.onload = init;
