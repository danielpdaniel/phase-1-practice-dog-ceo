console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", ()=>{
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const select = document.getElementById("breed-dropdown");
const options = document.querySelectorAll("option");
const optA = select.options[0];
const optB = select.options[1];
const optC = select.options[2];
const optD = select.options[3];
let currentSelection;


function createImage(url){
    let newImage = document.createElement("img")
    newImage.src = url;
    document.body.appendChild(newImage);
}

function getImages() {
fetch(imgUrl)
.then(res => res.json())
.then(data => data["message"].forEach(message => createImage(message)))
};



function dogBreedsUl(object){
let ulBreeds = document.querySelector("ul#dog-breeds");

    for(breed in object){

    let breedsLi = document.createElement("li");
    breedsLi.textContent = breed;
    breedsLi.className = breed[0]
    
    ulBreeds.appendChild(breedsLi);

    select.addEventListener("change", ()=>{
        if(breedsLi.className === event.target.value){
            ulBreeds.appendChild(breedsLi)
        } else{
            ulBreeds.removeChild(breedsLi)
        }
    })

    breedsLi.addEventListener("click", function(){
        breedsLi.style.color = "hotpink";
    })
    }
}

function getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => dogBreedsUl(data.message))
}

function initializeGets(){
    getImages();
    getBreeds();
  };



initializeGets();
})