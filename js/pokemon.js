export class Pokemon {
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
