const button = document.getElementById("celebrateButton");

const audio = new Audio("party.mp3");

button.addEventListener("click", () => {

    audio.play();

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

});