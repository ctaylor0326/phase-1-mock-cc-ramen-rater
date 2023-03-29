// write your code here

// Declarations
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetails = document.querySelector("#ramen-detail");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");
const newRamenForm = document.querySelector("#new-ramen");
const ramenImage = document.querySelector("#ramen-detail > img");
const ramenName = document.querySelector("#ramen-detail > h2");
const ramenRestaurant = document.querySelector("#ramen-detail > h3");
const ramenRating = document.querySelector("body > h3:nth-child(4)");
const ramenComment = document.querySelector("body > h3:nth-child(6)");

//Fetch requests


//images diplayed
fetch("http://localhost:3000/ramens")
.then((ramens) => ramens.json())
.then(ramens => {
	console.log(ramens);
    for (const ramen of ramens) {
        console.log(ramen);
        const img = document.createElement("img");
        img.src = ramen.image
        img.alt = ramen.name
        ramenMenu.append(img);
        img.addEventListener("click", function(){
            console.log("click")
            ramenImage.src = (ramen.image)
            ramenName.textContent = ramen.name
            ramenRestaurant.textContent = ramen.restaurant
            ratingDisplay.textContent = ramen.ratingDisplay
            commentDisplay.textContent = ramenComment

        })
    }     
    })
    








//DOM manipulators


