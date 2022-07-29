console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for your info, it has been submitted foreverrrrrrrr');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector("#duck")

duck.addEventListener('mouseover', function onHover(){
	alert("I knew you'd be interested in me, you ARE a great person! ")
})