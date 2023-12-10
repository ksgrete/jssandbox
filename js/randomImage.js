const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    console.log(image)
    let randomIndex = Math.floor(Math.random() * 4);
    image.src = "images/"+images[randomIndex];
    console.log(randomIndex)
}