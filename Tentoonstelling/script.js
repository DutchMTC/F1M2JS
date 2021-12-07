const image = document.getElementById("image");
const title = document.getElementById("title");

let paintings = [
    "assets/painting0.jpg", 
    "assets/painting1.jpg", 
    "assets/painting2.jpg", 
    "assets/painting3.jpg", 
    "assets/painting4.jpg", 
    "assets/painting5.jpg"]

let titles = [
    "De schilderijen van Van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhöne",
    "Zonnebloemen ",
    "Boerderij in de Provence"]

function changeImage(index){
    image.src = paintings[index];
    title.innerHTML = titles[index];
}
