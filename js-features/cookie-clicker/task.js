const imgCookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const imgCookieWidth = imgCookie.clientWidth;

imgCookie.onclick = () => {
    const currentCounter = +counter.textContent;
    counter.textContent = currentCounter + 1;
    imgCookie.style.width = '180px';
    setTimeout(() => {
        imgCookie.style.width = imgCookieWidth + 'px';
    }, 100)
}
