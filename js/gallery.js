
document.addEventListener('DOMContentLoaded', function() {
    
    loadGallery();
    setupCategoryFilters();
    initFancybox();
    setupAnimations();
});


function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    

    galleryGrid.innerHTML = '';
    
   
    Object.keys(galleryImages).forEach(category => {
        const images = galleryImages[category];
        
        images.forEach(image => {
            const galleryItem = createGalleryItem(image, category);
            galleryGrid.appendChild(galleryItem);
        });
    });
    
   
    createCategoryFilters();
}


function createGalleryItem(image, category) {
 
    const galleryItem = document.createElement('a');
    galleryItem.href = image.src;
    galleryItem.className = 'gallery-item';
    galleryItem.dataset.category = category;
    galleryItem.dataset.fancybox = 'gallery';
    

    const img = document.createElement('img');
    img.src = image.thumbnail;
    img.alt = image.alt;
    

    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    
    const caption = document.createElement('div');
    caption.className = 'gallery-item-caption';
    
    const title = document.createElement('h3');
    title.textContent = image.title;
    
   
    caption.appendChild(title);
    overlay.appendChild(caption);
    galleryItem.appendChild(img);
    galleryItem.appendChild(overlay);
    
    return galleryItem;
}


function createCategoryFilters() {
    // filtros
    const filterContainer = document.querySelector('.gallery-filters');
    if (!filterContainer) {
        
        const photosSection = document.querySelector('#photos');
        const filtersDiv = document.createElement('div');
        filtersDiv.className = 'gallery-filters';
        
        //botão "Todas"
        const allButton = document.createElement('button');
        allButton.className = 'category-btn active';
        allButton.dataset.category = 'all';
        allButton.textContent = 'Todas';
        filtersDiv.appendChild(allButton);
        
        // botões
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
            // tirar a classe dos botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            
            this.classList.add('active');
       
            const selectedCategory = this.getAttribute('data-category');
            
            
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                    item.style.display = 'block';
                    // Animação
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