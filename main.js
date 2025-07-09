document.addEventListener('DOMContentLoaded', function() {
    // Функция для отображения/скрытия меню
    const toggleMenuVisibility = (element, action) => {
        if (!element) return;
        
        if (action === 'show') {
            element.classList.add('show');
            element.style.display = 'flex';
        } else {
            element.classList.remove('show');
            element.style.display = 'none';
        }
    };

    // Находим все пункты главного меню с подменю
    const menuItemsWithSubmenu = document.querySelectorAll('.catalog__list-item');

    // Добавляем обработчики для каждого пункта главного меню
    menuItemsWithSubmenu.forEach(item => {
        const submenu = item.querySelector('.catalog__submenu');
        
        if (submenu) {
            // Показываем подменю при наведении на пункт меню
            item.addEventListener('mouseenter', function() {
                toggleMenuVisibility(submenu, 'show');
            });

            // Скрываем подменю при уходе с пункта меню
            item.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!submenu.matches(':hover')) {
                        toggleMenuVisibility(submenu, 'hide');
                        // Скрываем все вложенные подменю
                        const subsubmenus = submenu.querySelectorAll('.catalog__subsubmenu');
                        subsubmenus.forEach(subsub => toggleMenuVisibility(subsub, 'hide'));
                    }
                }, 300);
            });

            // Скрываем подменю при уходе с самого подменю
            submenu.addEventListener('mouseleave', function() {
                toggleMenuVisibility(submenu, 'hide');
            });
        }
    });

    // Находим все пункты подменю с подразделами
    const submenuItemsWithSubsubmenu = document.querySelectorAll('.catalog__submenu-item');

    // Добавляем обработчики для каждого пункта подменю
    submenuItemsWithSubsubmenu.forEach(item => {
        const subsubmenu = item.querySelector('.catalog__subsubmenu');
        
        if (subsubmenu) {
            // Показываем подраздел при наведении на пункт подменю
            item.addEventListener('mouseenter', function() {
                toggleMenuVisibility(subsubmenu, 'show');
            });

            // Скрываем подраздел при уходе с пункта подменю
            item.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!subsubmenu.matches(':hover')) {
                        toggleMenuVisibility(subsubmenu, 'hide');
                    }
                }, 300);
            });

            // Скрываем подраздел при уходе с самого подраздела
            subsubmenu.addEventListener('mouseleave', function() {
                toggleMenuVisibility(subsubmenu, 'hide');
            });
        }
    });

});