// set variables
let noClicks = 1;
const maxNoClicks = 6;
const minNoScale = 0.65;
const maxYesScale = 5;
let noScale = 1;
let yesScale = 1;
const gifElement = document.getElementById("ghost-gif");
const noButton = document.getElementById("no_button");
const yesButton = document.getElementById("yes_button");


// array of gifs
const gifs = ["images/ghost-anticipatedisappointment.gif", "images/ghost-blush.gif", "images/ghost-cute.gif", "images/ghost-squishheart.gif", "images/ghost-sadflower.gif", "images/ghost-sway.gif"]
const buttonMessages = ["Im gonna haunt you", "pls", "but why", "oowoowoowooooo", "BOO!", "PLS"]


// on no click, shrink no button
noButton.addEventListener("click", () => {
    // Change ghost image
    gifElement.src = gifs[noClicks % maxNoClicks]

    // Change no button text
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    noClicks++;

    // decrease size of no button when clicked
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }


    if (yesScale < maxYesScale) {
        yesScale += 1;
        yesButton.style.transform = `scale(${yesScale})`;
    }

})

// iterate on sad ghost image
// alternate no button text
// increase yes button size