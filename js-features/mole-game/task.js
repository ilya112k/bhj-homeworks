const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const holeGame = document.querySelector('.hole-game');

holeGame.onclick = (e) => {
    const target = e.target;
    const currentDeadValue = +deadCounter.textContent;
    const currenLostValue = +lostCounter.textContent;
    if (target.classList.contains('hole_has-mole')) {
        deadCounter.textContent = currentDeadValue + 1;
        if (currentDeadValue + 1 >= 10) {
            alert('Вы выиграли!');
            deadCounter.textContent = 0;
            lostCounter.textContent = 0;
        }
    } else {
        lostCounter.textContent = currenLostValue + 1;
        if (currenLostValue + 1 >= 5) {
            alert('Вы проиграли!');
            deadCounter.textContent = 0;
            lostCounter.textContent = 0;
        }
    }


}