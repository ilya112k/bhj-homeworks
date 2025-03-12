const rotatorList = document.querySelectorAll(".rotator");
rotatorList.forEach((rotator) => {
    const rotatorElements = rotator.querySelectorAll(".rotator__case");
    const rotatorElementsArray = [...rotatorElements];
    setInterval(() => {
        let activeIndex = rotatorElementsArray.findIndex((e) => {
            return e.classList.contains('rotator__case_active');
        })
        rotatorElements[activeIndex].classList.remove('rotator__case_active');
        if (activeIndex  >= rotatorElementsArray.length  -1) {
            activeIndex = -1;
        }
        rotatorElements[activeIndex + 1].classList.add('rotator__case_active');
    }, 1000)
})
