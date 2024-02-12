const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

function launchConfetti() {
    jsConfetti.addConfetti({
        emojis: ['💘', '💓', '💖', '💝', '😁','😽'],
    }).then(() => jsConfetti.addConfetti());
}

button.addEventListener('click', () => {
    launchConfetti();

    setInterval(launchConfetti, 1000);
});

