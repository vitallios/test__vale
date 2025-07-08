        document.addEventListener('DOMContentLoaded', function() {
            const smartphonesGadgets = document.getElementById('smartphones-gadgets');
            const smartphonesMenu = document.getElementById('smartphones-menu');
            const smartphones227 = document.getElementById('smartphones-227');
            const gadgetsMenu = document.getElementById('gadgets-menu');

            const toggleMenuVisibility = (element, action) => {
                if (action === 'show') {
                    element.classList.add('show');
                    element.style.display = 'flex';
                } else {
                    element.classList.remove('show');
                    element.style.display = 'none';
                }
            };

            smartphonesGadgets.addEventListener('click', function() {
                toggleMenuVisibility(smartphonesMenu, 'show');
            });

            smartphonesGadgets.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!smartphonesMenu.matches(':hover') && !smartphones227.matches(':hover')) {
                        toggleMenuVisibility(smartphonesMenu, 'hide');
                        toggleMenuVisibility(gadgetsMenu, 'hide');
                    }
                }, 600);
            });

            smartphones227.addEventListener('click', function() {
                toggleMenuVisibility(gadgetsMenu, 'show');
            });

            smartphones227.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!gadgetsMenu.matches(':hover')) {
                        toggleMenuVisibility(gadgetsMenu, 'hide');
                    }
                }, 600);
            });

            smartphonesMenu.addEventListener('click', function() {
                setTimeout(() => {
                    if (!smartphonesGadgets.matches(':hover') && !smartphones227.matches(':hover')) {
                        toggleMenuVisibility(smartphonesMenu, 'hide');
                        toggleMenuVisibility(gadgetsMenu, 'hide');
                    }
                }, 600);
            });

            gadgetsMenu.addEventListener('click', function() {
                setTimeout(() => {
                    if (!smartphones227.matches(':hover')) {
                        toggleMenuVisibility(gadgetsMenu, 'hide');
                    }
                }, 600);
            });
        });

