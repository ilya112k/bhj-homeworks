const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    dropdownValue.onclick = (e) => {
        e.preventDefault();
        dropdownList.classList.toggle('dropdown__list_active');
    }

    dropdownList.onclick = (e) => {
        e.preventDefault();
        const target = e.target;
        const dropdown = target.textContent.trim();
        dropdownValue.textContent = dropdown;
        dropdownList.classList.toggle('dropdown__list_active');
    }
})
