document.addEventListener('DOMContentLoaded', function () {

    const catalog = this.querySelector('.catalog')
    const bodyHeaderNavBurgerMenu = this.querySelector('.bodyHeader__nav-burger_menu')

    // открытие и закрытие меню
    bodyHeaderNavBurgerMenu.addEventListener('click', () => {
        catalog.classList.toggle('openCatalog');
        bodyHeaderNavBurgerMenu.classList.toggle('menuOpen');
    });

    const catalogList = this.querySelector('.catalog__list')
    for (let item of catalogList.children) {
        item.lastElementChild.classList.remove('catalog__mobile-submenu');
        // subMenu
        item.addEventListener('click', () => {
            if (item.lastChild && item.lastElementChild.classList.contains('catalog__submenu')) {
                const subsub = item.lastElementChild.querySelector('.catalog__subsubmenu');
                if (subsub) {
                    item.lastElementChild.classList.add('show','catalog__mobile-submenu');
                }
            }
        })
        // subSubMenu
        const catalogSubmenuItem = item.querySelectorAll('.catalog__submenu-item')
        for (let subitem of catalogSubmenuItem) {
            subitem.addEventListener('click', () => {
                if (subitem.lastElementChild && subitem.lastElementChild.classList.contains('catalog__subsubmenu')) {
                    
                    subitem.lastElementChild.classList.add('show', 'catalog__mobile-subsubmenu');
                }
            })
        }
        // 
    }
    const backButtonSubmenu = document.querySelectorAll('.back-button-submenu');
    const backButtonSubsubmenu = document.querySelectorAll('.back-button-subsubmenu');
    
    backButtonSubmenu.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.value = 'catalog__submenu';
            
        });
    });
    backButtonSubsubmenu.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.value = 'catalog__submenu';
            
        });
    });
});