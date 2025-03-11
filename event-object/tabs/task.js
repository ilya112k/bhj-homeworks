const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => {
    const content = tab.querySelector('.tab__contents');
    const navigator = tab.querySelector('.tab__navigation');

    const contentTabs = content.querySelectorAll('.tab__content');
    const navigatorTabs = navigator.querySelectorAll('.tab');

    const contentTabsArray = [...contentTabs]
    const navigatorTabsArray = [...navigatorTabs];

    navigator.onclick = (e) => {
        e.preventDefault();
        const tabIndex = navigatorTabsArray.indexOf(e.target);
        if (tabIndex >= 0) {
            navigatorTabsArray.forEach((t) => t.classList.remove('tab_active'));
            contentTabsArray.forEach((t) => t.classList.remove('tab__content_active'));
        }
        contentTabsArray[tabIndex].classList.add('tab__content_active');
        navigatorTabsArray[tabIndex].classList.add('tab_active');
    }

})