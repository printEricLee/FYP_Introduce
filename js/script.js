document.addEventListener('DOMContentLoaded', () => {
    // 導航列下拉選單切換 (觸控裝置)
    const navItems = document.querySelectorAll('#nav > ul > li');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const submenu = item.querySelector('ul');
            if (submenu) {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // 深色模式切換
    const toggleBtn = document.getElementById('mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
