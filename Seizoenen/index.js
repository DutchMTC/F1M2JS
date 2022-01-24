const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
    "titel":"Seizoenen",
    "image":"img/seasons.jpg",
    "backGround":"gray"
    },
    {
    "titel":"Lente",
    "image":"img/spring.jpg",
    "backGround":"green"
    },
    {
    "titel":"Zomer",
    "image":"img/summer.jpg",
    "backGround":"yellow"
    },
    {
    "titel":"Herfst",
    "image":"img/autumn.jpg",
    "backGround":"brown"
    },
    {
    "titel":"Winter",
    "image":"img/winter.jpg",
    "backGround":"lightblue"
    }
];


function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.style.backGround = seizoenen[index].backGround;
}