const groentevak = document.getElementById("groente");
const fruitvak = document.getElementById("fruit");

function zetInFruitLa(fruit){
    console.log(fruit + " staat nu in de fruit la.");

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = "fruit";
    fruitvak.appendChild(nieuwElement);
}

function zetInGroenteLa(groente){
    console.log(groente + " staat nu in de groente la.");

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    nieuwElement.className = "groente";
    groentevak.appendChild(nieuwElement);
}

