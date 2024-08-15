function startCountdown() {
    let time = document.getElementById("timeInput").value;
    const display = document.getElementById("countdownDisplay");

    if (time <= 0 || isNaN(time)) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    display.textContent = time;

    const countdown = setInterval(() => {
        time--;
        display.textContent = time;

        if (time <= 0) {
            clearInterval(countdown);
            display.textContent = "Time's up!";
        }
    }, 1000);
}


document.getElementById("textParagraph").addEventListener("dblclick", function() {
    this.textContent = "Smile😊";
});