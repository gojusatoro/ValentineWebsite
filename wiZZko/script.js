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

src="./script.js"
  var yesButton = document.getElementById("yes");
  yesButton.addEventListener("click", function() {
    // Send a request to the server when the "Yes" button is clicked
    fetch('/api/record-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buttonClicked: 'yes',
        // You can send additional data if needed
      }),
    })
    .then(response => response.json())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Error:', error));
});



