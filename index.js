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
const BOXBTNCOMBATTRE = [];
const NOMPOKEMON = [];
const BOXPVPEPOKEMON = [];
const BOXIMGPOKEMONFIGHT = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Pokemon {
  constructor(name, pv, pe, type, image) {
    this.name = name;
    this.pv = pv;
    this.pe = pe;
    this.type = type;
    this.image = image;
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

const CARAPUCE = new Pokemon("CARAPUCE", 70, 200, "eau", 0);
const BULBIZZARE = new Pokemon("BULBIZZARE", 70, 200, "plante", 1);
const DRACAUFEU = new Pokemon("DRACAUFEU", 120, 200, "feu", 2);
const LEVIATOR = new Pokemon("LEVIATOR", 100, 200, "eau", 3);
const MAGICARPE = new Pokemon("MAGICARPE", 30, 200, "eau", 4);
const METAMORPH = new Pokemon("METAMORPH", 60, 200, "normal", 5);
const MEWTWO = new Pokemon("MEWTWO", 120, 200, "psy", 6);
const MRMIME = new Pokemon("MR-MIME", 80, 200, "psy", 7);
const PIKACHU = new Pokemon("PIKACHU", 60, 200, "electrique", 8);
const PSYKOKWAK = new Pokemon("PSYKOKWAK", 60, 200, "eau", 9);
const RONDOUDOU = new Pokemon("RONDOUDOU", 70, 200, "fee", 10);
const RONFLEX = new Pokemon("RONFLEX", 150, 200, "normal", 11);
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
  BOXBTNCOMBATTRE[i] = document.querySelector(`.box-btn-combat-pokemon-${i}`);
  pokemonSeleted[i] = false;
}

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
    if (
      iconePokeball1Active == true &&
      iconePokeball2Active == true &&
      iconePokeball3Active == true
    ) {
      for (let i = 0; i < BTNSELECTPOKEMON.length; i++) {
        BOXBTNCOMBATTRE[i].classList.remove("none-important");
        BTNSELECTPOKEMON[i].classList.add("none-important");
      }
    }
    console.log(iconePokeball1Active);
    console.log(iconePokeball2Active);
    console.log(iconePokeball3Active);
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

for (let i = 0; i < ALLOBJECTPOKEMON.length; i++) {
  NOMPOKEMON[i] = document.querySelector(`#nom-pokemon-${i}`);
  BOXPVPEPOKEMON[i] = document.querySelector(`#box-pv-pe-${i}`);
  BOXIMGPOKEMONFIGHT[i] = document.querySelector(`#box-img-pokemon-fight-${i}`);
  NOMPOKEMON[i].innerHTML = `
  <h2>${ALLOBJECTPOKEMON[i].name}<h2>
`;
  BOXPVPEPOKEMON[i].innerHTML = `
  <h3 class="pv">${ALLOBJECTPOKEMON[i].pv}PV</h3><h3 class="pe">${ALLOBJECTPOKEMON[i].pe}PE</h3>
`;
  BOXIMGPOKEMONFIGHT[i].innerHTML = `
<img class="img-pokemon-fight" src="./img/pokemon_fight_${i}.png">
`;
}

const BOXPOKEMONENEMY = document.querySelector("#box-pokemon-enemy");

console.log(BOXPOKEMONENEMY);

for (let i = 0; i < ALLOBJECTPOKEMON.length; i++) {
  BOXBTNCOMBATTRE[i].addEventListener("click", () => {
    BOXPOKEMONENEMY.classList.remove("none");

    setTimeout(generatorPokemonEnemy1, 100);
    setTimeout(generatorPokemonEnemy1, 200);
    setTimeout(generatorPokemonEnemy1, 300);
    setTimeout(generatorPokemonEnemy1, 400);
    setTimeout(generatorPokemonEnemy1, 500);
    setTimeout(generatorPokemonEnemy1, 600);
    setTimeout(generatorPokemonEnemy1, 700);
    setTimeout(generatorPokemonEnemy1, 800);
    setTimeout(generatorPokemonEnemy1, 900);
    setTimeout(generatorPokemonEnemy1, 1000);
    setTimeout(generatorPokemonEnemy1, 1100);
    setTimeout(generatorPokemonEnemy1, 1200);
    setTimeout(generatorPokemonEnemy1, 1300);
    setTimeout(generatorPokemonEnemy1, 1400);
    setTimeout(generatorPokemonEnemy1, 1500);
    setTimeout(generatorPokemonEnemy1, 1600);

    function generatorPokemonEnemy1() {
      let rand = Math.floor(Math.random() * ALLOBJECTPOKEMON.length);
      let rValue = ALLOBJECTPOKEMON[rand];
      console.log(rValue);
      BOXPOKEMONENEMY.innerHTML = `
        <h2>${rValue.name}</h2>
        <img class="img-pokemon-fight" src="./img/pokemon_fight_${rValue.image}.png">
        <div class="box-pv-pe">
        <h3 class="pv">${rValue.pv}PV</h3><h3 class="pe">${rValue.pe}PE</h3>
        </div>
        `;
    }
  });
}
