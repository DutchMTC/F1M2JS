const catname = document.getElementById("name");
const catage = document.getElementById("age");
const catfurColor = document.getElementById("furColor");
const cateyeColor = document.getElementById("eyeColor");
const catimage = document.getElementById("image");

const cat = {
    name: "Vicky",
    age: 3,
    furColor: "white",
    eyeColor: "blue",
    image: "https://www.bubblypet.com/wp-content/uploads/2021/09/Beautiful-white-cat-with-blue-eyes-relaxing-on-bed.jpeg"
}

function setCat(){
    catname.innerHTML = "Name: " + cat.name;
    catage.innerHTML = "Age: " + cat.age;
    catfurColor.innerHTML = "Fur Color: " + cat.furColor;
    cateyeColor.innerHTML = "Eye Color: " + cat.eyeColor;
    catimage.src = cat.image;
}

console.log(cat);