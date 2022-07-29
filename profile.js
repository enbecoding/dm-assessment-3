const favColorBtn = document.querySelector("#color-button")

favColorBtn.addEventListener('mouseover', function (){
    favColorBtn.style.backgroundColor="green"
    favColorBtn.style.color="white"
    alert("Sorry I had to use this, but it's green.")
})

favColorBtn.addEventListener('mouseout', function () {
    favColorBtn.style.backgroundColor="#EFEFEF"
    favColorBtn.style.color="black"
})

const favPlaceBtn = document.querySelector('#place-button')

favPlaceBtn.addEventListener('click', function() {
    window.open ("https://cdn.decoist.com/wp-content/uploads/2014/12/Contemporary-Seattle-living-room-870x520.jpg", '_blank');
})

const favFoodBtn = document.querySelector('#food-button')

favFoodBtn.addEventListener('click', function() {
    window.open ("https://thewoksoflife.com/wp-content/uploads/2017/02/pad-see-ew-11-2.jpg", '_blank');
})

const restaraunts = ["Dicky's BBQ Pit", "Napoli's", "Bonefish Grill", "Kelly's"]

const random = restaraunts[(Math.random() * restaraunts.length) | 0]

const randomBtn = document.querySelector(".random-button")

randomBtn.addEventListener('click', function () { 
    function(random[restaraunts])
})