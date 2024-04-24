const greenButtons = document.getElementsByClassName('green');
const redButtons = document.getElementsByClassName('red');
const blueButtons = document.getElementsByClassName('blue');
const body = document.body;

// Function to change body color
function changeBodyColor(color) {
    body.style.backgroundColor = color;
}

// Attaching event listener to each green button
for (let i = 0; i < greenButtons.length; i++) {
    greenButtons[i].addEventListener('click', () => {
        changeBodyColor('green');
    });
}

// Attaching event listener to each red button
for (let i = 0; i < redButtons.length; i++) {
    redButtons[i].addEventListener('click', () => {
        changeBodyColor('red');
    });
}

// Attaching event listener to each blue button
for (let i = 0; i < blueButtons.length; i++) {
    blueButtons[i].addEventListener('click', () => {
        changeBodyColor('blue');
    });
}
