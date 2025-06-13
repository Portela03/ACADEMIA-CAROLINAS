/**
 * Scripts específicos para a página de galeria da Academia Carolinas
 * Este arquivo gerencia o carregamento dinâmico das imagens e vídeos
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar a galeria
    loadGallery();
    setupCategoryFilters();
    initFancybox();
    setupAnimations();
});

/**
 * Carrega todas as imagens na galeria a partir dos dados
 */
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Limpar qualquer conteúdo existente
    galleryGrid.innerHTML = '';
    
    // Para cada categoria, adicionar imagens à galeria
    Object.keys(galleryImages).forEach(category => {
        const images = galleryImages[category];
        
        images.forEach(image => {
            const galleryItem = createGalleryItem(image, category);
            galleryGrid.appendChild(galleryItem);
        });
    });
    
    // Criar filtros de categoria dinamicamente
    createCategoryFilters();
}

/**
 * Cria um elemento de item da galeria
 * @param {Object} image - Dados da imagem
 * @param {String} category - Categoria da imagem
 * @returns {HTMLElement} - Elemento do item da galeria
 */
function createGalleryItem(image, category) {
    // Criar elemento <a> para o item da galeria
    const galleryItem = document.createElement('a');
    galleryItem.href = image.src;
    galleryItem.className = 'gallery-item';
    galleryItem.dataset.category = category;
    galleryItem.dataset.fancybox = 'gallery';
    
    // Criar elemento <img>
    const img = document.createElement('img');
    img.src = image.thumbnail;
    img.alt = image.alt;
    
    // Criar overlay com legenda
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    
    const caption = document.createElement('div');
    caption.className = 'gallery-item-caption';
    
    const title = document.createElement('h3');
    title.textContent = image.title;
    
    // Montar estrutura do item
    caption.appendChild(title);
    overlay.appendChild(caption);
    galleryItem.appendChild(img);
    galleryItem.appendChild(overlay);
    
    return galleryItem;
}

/**
 * Cria filtros de categoria baseados nas categorias disponíveis
 */
function createCategoryFilters() {
    // Verificar se existe um contêiner de filtros
    const filterContainer = document.querySelector('.gallery-filters');
    if (!filterContainer) {
        // Criar o contêiner de filtros se não existir
        const photosSection = document.querySelector('#photos');
        const filtersDiv = document.createElement('div');
        filtersDiv.className = 'gallery-filters';
        
        // Criar botão "Todas"
        const allButton = document.createElement('button');
        allButton.className = 'category-btn active';
        allButton.dataset.category = 'all';
        allButton.textContent = 'Todas';
        filtersDiv.appendChild(allButton);
        
        // Criar botões para cada categoria
        Object.keys(galleryImages).forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.dataset.category = category;
            
          
            let categoryName = category.replace(/-/g, ' ');
            categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            
            button.textContent = categoryName;
            filtersDiv.appendChild(button);
        });
        
      
        const galleryTitle = photosSection.querySelector('h2');
        galleryTitle.after(filtersDiv);
        
   
        setupCategoryFilters();
    }
}


function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe ativa de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe ativa ao botão clicado
            this.classList.add('active');
       
            const selectedCategory = this.getAttribute('data-category');
            
            
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                    item.style.display = 'block';
                    // Animar entrada com fade
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}


function initFancybox() {
    Fancybox.bind('[data-fancybox="gallery"]', {
        animationEffect: "fade",
        transitionEffect: "fade",
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ]
    });
}


function setupAnimations() {
l
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
}