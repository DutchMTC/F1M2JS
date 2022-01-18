const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById("knopNoord"),
    "oost": document.getElementById("knopOost"),
    "zuid": document.getElementById("knopZuid"),
    "west": document.getElementById("knopWest")
}

let current_index = 0;

let locaties =[ // Array
{ // 0 = Object
    "title":"Silver Bullet Ingang",
    "image":"img/0.jpg",
    "directions": {
        "zuid": 1
    }
},
{ // 1 = Object
    "title":"Gang voor C0.90",
    "image":"img/1.jpg",
    "directions": {
        "west": 2,
        "oost": 5,
        "zuid": 4,
        "noord": 0
    }
},
{
    "title":"Gang voor C0.95",
    "image":"img/2.jpg",
    "directions": {
        "oost": 1,
        "zuid": 3,
    }
},
{
    "title":"Lokaal C0.95",
    "image":"img/3.jpg",
    "directions": {
        "noord": 2
    }
},
{
    "title":"Docentenkamer (C0.91)",
    "image":"img/4.jpg",
    "directions": {
        "noord": 1
    }
},
{
    "title":"Gang in de Silver Bullet",
    "image":"img/5.jpg",
    "directions": {
        "west": 1,
        "oost": 6,
        "noord": 10
    }
},
{
    "title":"Gang voor Toiletten",
    "image":"img/6.jpg",
    "directions": {
        "west": 5,
        "oost": 7,
        "zuid": 11
    }
},
{
    "title":"Gang voor C0.93",
    "image":"img/7.jpg",
    "directions": {
        "west": 6,
        "zuid": 8,
        "noord": 9
    }
},
{
    "title":"Lokaal C0.93",
    "image":"img/8.jpg",
    "directions": {
        "noord": 7
    }
},
{
    "title":"Lokaal C0.92",
    "image":"img/9.jpg",
    "directions": {
        "west": 10,
        "zuid": 7,
    }
},
{
    "title":"Lokaal C0.90",
    "image":"img/10.jpg",
    "directions": {
        "oost": 9,
        "zuid": 5,
    }
},
{
    "title":"Toiletten",
    "image":"img/11.jpg",
    "directions": {
        "noord": 6
    }
}
]

//myTitle.innerHTML = "Dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = locaties[index].title;
    myImage.src = locaties[index].image;
    current_index = index;

    // Knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // Haal de mogelijke directions op voor de current_index
    let possible = locaties[current_index].directions;

    // Zet de direction keys in een aparte variabele
    let possibleKeys = Object.keys(possible);

    // Zet de keys op van de buttons in een aparte variabele
    let buttonKeys = Object.keys(directionButtons);

    // Zet eerst alle knoppen uit
    for(const key of buttonKeys){
        directionButtons[key].style.visibility = "hidden";
    }

    // Zet nu de mogelijke knoppen (directions) aan
    for(const key of possibleKeys){
        directionButtons[key].style.visibility = "visible";
    }


}

function getInput(){
    show(myInput.value);
    //console.log(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(direction){
    let punt_index = locaties[current_index].directions[direction];
    show(punt_index);
}

show(0);