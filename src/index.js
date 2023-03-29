// write your code here

// Declarations
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetails = document.querySelector("#ramen-detail");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");
const newRamenForm = document.querySelector("#new-ramen");


//Fetch requests
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

    } 

	
    
    })
    








//DOM manipulators


