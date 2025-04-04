const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const mainContainer = document.getElementById('mainContainer'); // Get the container

let yesFontSize = 1.5; // Initial font size in em
let yesPaddingTB = 15; // Initial top/bottom padding in px
let yesPaddingLR = 30; // Initial left/right padding in px

let noButtonClickCount = 0;
const messages = [
    "No? Are you sure?",
    "Really sure?",
    "Think again!",
    "Pretty please?",
    "Don't do this to me :(",
    "I'm gonna cry...",
    "Okay, last chance!",
    "You're breaking my heart ;(",
    "But... but... why?",
    "Is this really your final answer?",
    "Please reconsider!",
    "Maybe just a little yes?",
    "I'll be a great boyfriend!",
    "Come on!",
    "Just click yes already!",
];

noButton.addEventListener('click', () => {
    noButtonClickCount++;

    // Increase the size of the YES button
    yesFontSize += 0.6;
    yesPaddingTB += 8;
    yesPaddingLR += 15;

    yesButton.style.fontSize = `${yesFontSize}em`;
    yesButton.style.padding = `${yesPaddingTB}px ${yesPaddingLR}px`;

    // Change the text on the NO button
    if (noButtonClickCount < messages.length) {
        noButton.textContent = messages[noButtonClickCount];
    } else {
        noButton.style.transform = 'scale(0.5)';
        noButton.style.opacity = '0.5';
        noButton.textContent = "Okay :(";
    }

    // Make the question smaller
    question.style.opacity = Math.max(0.4, 1 - noButtonClickCount * 0.05);

    // Check if the YES button should cover the screen
    if (yesFontSize > 10) { // Threshold when YES covers screen
        if (!yesButton.classList.contains('growing')) { // Check if class not already added
             yesButton.classList.add('growing');
             // Only hide No button and Question when YES starts growing significantly
             noButton.style.display = 'none';
             question.style.display = 'none'; // Hide question when YES covers screen
        }
    }
});

// Add a fun confirmation when YES is clicked
yesButton.addEventListener('click', () => {
    // ---- CHANGE IS HERE ----
    // Remove or comment out the line that hides the container:
    // mainContainer.style.display = 'none';

    // Uncomment and use this line to replace the entire page content
    // with just the styled confirmation message:
    document.body.innerHTML = '<h1 style="padding-top: 40vh; color: #ff69b4; font-size: 5em; text-align: center; font-family: Pacifico, cursive; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">Yay! You said YES! &lt;3</h1>';
    // Added 'padding-top: 40vh;' to roughly vertically center the message

    // --- The code below is not needed when using innerHTML approach ---
    // question.textContent = "Yay! You said YES! <3";
    // question.style.opacity = '1';
    // question.style.fontSize = '3em';
    // document.querySelector('.buttons').style.display = 'none';
});