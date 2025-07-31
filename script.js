// menu script start
const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const fullscreenMenu = document.querySelector('.fullscreen-menu');
        
        menuBtn.addEventListener('click', () => {
            fullscreenMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close menu when clicking on links
        const menuLinks = document.querySelectorAll('.fullscreen-menu ul li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
// menu script end
