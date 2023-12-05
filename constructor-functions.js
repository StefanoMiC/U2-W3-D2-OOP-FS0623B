// constructor function sono funzioni che hanno il preciso scopo di creare oggetti
// dichiarate in PascalCase === prima lettera maiuscola e le successive

const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.myMethod = function () {};
};

const giuseppeVerdi = new Person();

giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";

console.log(giuseppeVerdi);

const DynamicPerson = function (_name, _surname, _address, _email, _myMethod = function () {}) {
  this.name = _name;
  this.surname = _surname;
  this.address = _address;
  this.email = _email;
  this.catchPhrase = _myMethod;
};

const marioSuper = new DynamicPerson("Mario", "Super", "Yoshi Island", "super@mario.com", function () {
  console.log("It's me " + this.name);
});
console.log(marioSuper);
const warioSuper = new DynamicPerson("Wario", "Super", "Castle", "super@wario.com", function () {
  console.log("It's me " + this.name);
});
console.log(warioSuper);
warioSuper.catchPhrase();
