const bookControl = document.querySelector('.book__control');
const bookContent = document.querySelector('.book__content');
const bookControlList = [...bookControl.querySelectorAll('.font-size')];

bookControl.onclick = (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('font-size')) {
        bookControlList.forEach(e => e.classList.remove('font-size_active'));
        target.classList.add('font-size_active');

        const bookClassList = bookContent.classList.value.split(' ');
        const targetClassList =  target.classList.value.split(' ');

        const currentSize = bookClassList.find(el => el.includes('font-size_'));
        const newFontSizeClass = targetClassList.find(el => el.includes('font-size_'));

        bookContent.classList.remove(currentSize);
        bookContent.classList.add(newFontSizeClass);
    }
}