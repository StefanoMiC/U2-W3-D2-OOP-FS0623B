const myObj = { name: "Stefano", surname: "Miceli" };

console.log(myObj);
console.log(myObj.__proto__); // Object
console.log(myObj.__proto__.__proto__); // null

const myStr = "Epicode";
console.dir(myStr);
console.log(myStr.__proto__); // String
console.log(myStr.__proto__.__proto__); // Object
console.log(myStr.__proto__.__proto__.__proto__); // null

const myArr = [];
console.log(myArr);
console.log(myArr.__proto__); // Array
console.log(myArr.__proto__.__proto__); // Object
console.log(myArr.__proto__.__proto__.__proto__); // null

const myFunc = function () {};
console.dir(myFunc);
console.log(myFunc.__proto__); // Function
console.log(myFunc.__proto__.__proto__); // Object
console.log(myFunc.__proto__.__proto__.__proto__); // null

let selectedProp = "nickname";

const myCat = {
  // creazione dinamica di proprietà di oggetto con bracket notation (interpreta il valore prima di utilizzarlo)
  [selectedProp]: "Kitty",
  age: 2,
  "fur-type": "long and fluffy",
  "date.of.adoption": "25/12/2023",
  parentCat: {
    name: "Smoky"
  }
};
// Accedere a proprietà di un oggetto:

// dot notation - accedere a proprietà di oggetti senza caratteri speciali
console.log(myCat.age); // 2
console.log(myCat.parentCat.name);

// bracket notation - per accedere a proprietà con caratteri speciali
console.log(myCat["date.of.adoption"]); // "25/12/2023"
// myCat.fur - type; // impossibile accedere alla proprietà fur-type
console.log(myCat["fur-type"]); // "long and fluffy"

console.log("SELECTED PROP: ", myCat[selectedProp]);

// creazione a posteriori di proprietà sull'oggetto già creato
myCat.numOfLegs = 4;

delete myCat.age;
console.log(myCat);

myCat.livesCount = { value: 7 };

myCat.livesCount.value = myCat.livesCount.value - 2;
console.log(myCat);

console.log(Object.keys(myCat)); // metodo sul costruttore che ritorna un array con chiavi del nostro oggetto in forma di stringa
console.log(Object.values(myCat)); // metodo sul costruttore che ritorna un array con valori del nostro oggetto
console.log(Object.entries(myCat)); // metodo sul costruttore che ritorna un array con valori del nostro oggetto
