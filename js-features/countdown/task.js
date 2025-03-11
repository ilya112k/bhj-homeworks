const startTimer = document.getElementById("timer");
const st = setInterval(() => {
    const currentValue = +startTimer.textContent;
    if (currentValue <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(st);
    } else {
        startTimer.textContent = currentValue - 1;
    }
}, 1000)