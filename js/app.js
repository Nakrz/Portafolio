
// DROPDOWN MENU //

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const menuLinks = document.querySelectorAll('.dropdown_menu a'); 


    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    }


    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.className = 'fa-solid fa-bars'; 
        });
    });
})


// DROPDOWN MENU //