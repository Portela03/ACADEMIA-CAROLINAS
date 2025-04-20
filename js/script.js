// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileNav.contains(event.target);
    const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuBtn && mobileNav.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Detectar scroll para efeitos
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});

// Verificar tamanho da tela ao carregar e redimensionar
function checkScreenSize() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (window.innerWidth >= 768) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);