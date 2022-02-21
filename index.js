const BTNPOKEMON = [];
const POKEMONFIGHT = [];
const BTNSELECTPOKEMON = [];
const NBRPOKEMON = 12;
const ICONEPOKEBALL1 = document.querySelector("#icone-pokeball-1");
const ICONEPOKEBALL1ACTIVE = document.querySelector("#icone-pokeball-1-active");
const ICONEPOKEBALL2 = document.querySelector("#icone-pokeball-2");
const ICONEPOKEBALL2ACTIVE = document.querySelector("#icone-pokeball-2-active");
const ICONEPOKEBALL3 = document.querySelector("#icone-pokeball-3");
const ICONEPOKEBALL3ACTIVE = document.querySelector("#icone-pokeball-3-active");
let iconePokeball1Active = false;
let iconePokeball2Active = false;
let iconePokeball3Active = false;
let pokemonSeleted = [];
const BOXBTNPOKEMON = [];
const ICONECLOSEBTN = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Pokemon {
  constructor(pv, pe, type) {
    this.pv = pv;
    this.pe = pe;
    this.type = type;
  }
  attaqueDeNiveau1() {
    getRandomIntInclusive(1, 10);
  }
  attaqueDeNiveau2() {
    getRandomIntInclusive(10, 20);
  }
  attaqueDeNiveau3() {
    getRandomIntInclusive(20, 30);
  }
}

const CARAPUCE = new Pokemon(70, 200, "eau");
const BULBIZZARE = new Pokemon(70, 200, "plante");
const DRACAUFEU = new Pokemon(120, 200, "feu");
const LEVIATOR = new Pokemon(100, 200, "eau");
const MAGICARPE = new Pokemon(30, 200, "eau");
const METAMORPH = new Pokemon(60, 200, "normal");
const MEWTWO = new Pokemon(120, 200, "psy");
const MRMIME = new Pokemon(80, 200, "psy");
const PIKACHU = new Pokemon(60, 200, "electrique");
const PSYKOKWAK = new Pokemon(60, 200, "eau");
const RONDOUDOU = new Pokemon(70, 200, "fee");
const RONFLEX = new Pokemon(150, 200, "normal");
const ALLOBJECTPOKEMON = [
  CARAPUCE,
  BULBIZZARE,
  DRACAUFEU,
  LEVIATOR,
  MAGICARPE,
  METAMORPH,
  MEWTWO,
  MRMIME,
  PIKACHU,
  PSYKOKWAK,
  RONDOUDOU,
  RONFLEX,
];

for (let i = 0; i < NBRPOKEMON; i++) {
  BTNPOKEMON[i] = document.querySelector(`#btn-pokemon-${i}`);
  POKEMONFIGHT[i] = document.querySelector(`#pokemon-fight-${i}`);
  BTNSELECTPOKEMON[i] = document.querySelector(`#btn-select-pokemon-${i}`);
  BOXBTNPOKEMON[i] = document.querySelector(`#box-btn-pokemon-${i}`);
  ICONECLOSEBTN[i] = document.querySelector(`#icone-close-${i}`);
  pokemonSeleted[i] = false;
}

console.log(ICONECLOSEBTN);

function iconePokeballActive() {
  if (
    iconePokeball1Active == false &&
    iconePokeball2Active == false &&
    iconePokeball3Active == false
  ) {
    ICONEPOKEBALL1.classList.add("none");
    ICONEPOKEBALL1ACTIVE.classList.remove("none");
    iconePokeball1Active = true;
  } else if (
    iconePokeball1Active == true &&
    iconePokeball2Active == false &&
    iconePokeball3Active == false
  ) {
    ICONEPOKEBALL2.classList.add("none");
    ICONEPOKEBALL2ACTIVE.classList.remove("none");
    iconePokeball2Active = true;
  } else if (
    iconePokeball1Active == true &&
    iconePokeball2Active == true &&
    iconePokeball3Active == false
  ) {
    ICONEPOKEBALL3.classList.add("none");
    ICONEPOKEBALL3ACTIVE.classList.remove("none");
    iconePokeball3Active = true;
  }
}

function iconePokeballRemove() {
  if (
    iconePokeball1Active == true &&
    iconePokeball2Active == true &&
    iconePokeball3Active == true
  ) {
    ICONEPOKEBALL3.classList.remove("none");
    ICONEPOKEBALL3ACTIVE.classList.add("none");
    iconePokeball3Active = false;
  } else if (
    iconePokeball1Active == true &&
    iconePokeball2Active == true &&
    iconePokeball3Active == false
  ) {
    ICONEPOKEBALL2.classList.remove("none");
    ICONEPOKEBALL2ACTIVE.classList.add("none");
    iconePokeball2Active = false;
  } else if (
    iconePokeball1Active == true &&
    iconePokeball2Active == false &&
    iconePokeball3Active == false
  ) {
    ICONEPOKEBALL1.classList.remove("none");
    ICONEPOKEBALL1ACTIVE.classList.add("none");
    iconePokeball1Active = false;
  }
  console.log(iconePokeball1Active);
  console.log(iconePokeball2Active);
  console.log(iconePokeball3Active);
}

for (let i = 0; i < BTNSELECTPOKEMON.length; i++) {
  BTNSELECTPOKEMON[i].addEventListener("click", () => {
    iconePokeballActive();
    pokemonSeleted[i] = true;
    localStorage.setItem(
      `pokemonChoisi${i}`,
      JSON.stringify(ALLOBJECTPOKEMON[i])
    );
    BOXBTNPOKEMON[i].classList.add("opacity-0-5");
    ICONECLOSEBTN[i].classList.remove("none");
  });
  ICONECLOSEBTN[i].addEventListener("click", () => {
    localStorage.removeItem(`pokemonChoisi${i}`);
    BOXBTNPOKEMON[i].classList.remove("opacity-0-5");
    ICONECLOSEBTN[i].classList.add("none");
    iconePokeballRemove();
  });
}

for (let x = 0; x < BTNPOKEMON.length; x++) {
  BTNPOKEMON[x].addEventListener("click", () => {
    for (let i = 0; i < POKEMONFIGHT.length; i++) {
      POKEMONFIGHT[i].classList.add("none");
    }
    POKEMONFIGHT[x].classList.remove("none");
  });
}
