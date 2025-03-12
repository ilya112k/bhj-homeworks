const revealList = document.querySelectorAll('.reveal');

document.onscroll = (e) => {
    revealList.forEach((reveal) => {
        const revealY = reveal.getBoundingClientRect().y;
        if (revealY < window.innerHeight / 2) {
            reveal.classList.add('reveal_active');
        }
    });
}
