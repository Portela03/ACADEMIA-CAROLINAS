// /**
//  * Scripts específicos para a página de galeria da Academia Carolinas
//  * Este arquivo gerencia o carregamento dinâmico das imagens e vídeos
//  */

// document.addEventListener('DOMContentLoaded', function() {
//     // Inicializar a galeria
//     loadGallery();
//     setupCategoryFilters();
//     initFancybox();
//     setupAnimations();
// });

// /**
//  * Carrega todas as imagens na galeria a partir dos dados
//  */
// function loadGallery() {
//     const galleryGrid = document.querySelector('.gallery-grid');
    
//     // Limpar qualquer conteúdo existente
//     galleryGrid.innerHTML = '';
    
//     // Para cada categoria, adicionar imagens à galeria
//     Object.keys(galleryImages).forEach(category => {
//         const images = galleryImages[category];
        
//         images.forEach(image => {
//             const galleryItem = createGalleryItem(image, category);
//             galleryGrid.appendChild(galleryItem);
//         });
//     });
    
//     // Carregar vídeos
//     loadVideos();
// }

// /**
//  * Cria um elemento de item da galeria
//  * @param {Object} image - Dados da imagem
//  * @param {String} category - Categoria da imagem
//  * @returns {HTMLElement} - Elemento do item da galeria
//  */
// function createGalleryItem(image, category) {
//     // Criar elemento <a> para o item da galeria
//     const galleryItem = document.createElement('a');
//     galleryItem.href = image.src;
//     galleryItem.className = 'gallery-item';
//     galleryItem.dataset.category = category;
//     galleryItem.dataset.fancybox = 'gallery';
    
//     // Criar elemento <img>
//     const img = document.createElement('img');
//     img.src = image.thumbnail;
//     img.alt = image.alt;
    
//     // Criar overlay com legenda
//     const overlay = document.createElement('div');
//     overlay.className = 'gallery-item-overlay';
    
//     const caption = document.createElement('div');
//     caption.className = 'gallery-item-caption';
    
//     const title = document.createElement('h3');
//     title.textContent = image.title;
    
//     // Montar estrutura do item
//     caption.appendChild(title);
//     overlay.appendChild(caption);
//     galleryItem.appendChild(img);
//     galleryItem.appendChild(overlay);
    
//     return galleryItem;
// }

// /**
//  * Carrega os vídeos na seção de vídeos
//  */
// function loadVideos() {
//     const videosGrid = document.querySelector('.videos-grid');
    
//     // Limpar qualquer conteúdo existente
//     videosGrid.innerHTML = '';
    
//     // Adicionar cada vídeo à grade
//     galleryVideos.forEach(video => {
//         const videoItem = createVideoItem(video);
//         videosGrid.appendChild(videoItem);
//     });
// }

// /**
//  * Cria um elemento de item de vídeo
//  * @param {Object} video - Dados do vídeo
//  * @returns {HTMLElement} - Elemento do item de vídeo
//  */
// function createVideoItem(video) {
//     // Criar elemento div para o item de vídeo
//     const videoItem = document.createElement('div');
//     videoItem.className = 'video-item';
    
//     // Criar container do vídeo
//     const videoContainer = document.createElement('div');
//     videoContainer.className = 'video-container';
    
//     // Criar iframe
//     const iframe = document.createElement('iframe');
//     iframe.src = video.embedUrl;
//     iframe.title = video.title;
//     iframe.setAttribute('frameborder', '0');
//     iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
//     iframe.setAttribute('allowfullscreen', '');
    
//     // Criar legenda do vídeo
//     const videoCaption = document.createElement('div');
//     videoCaption.className = 'video-caption';
    
//     const title = document.createElement('h3');
//     title.textContent = video.title;
    
//     const description = document.createElement('p');
//     description.textContent = video.description;
    
//     // Montar estrutura do item de vídeo
//     videoContainer.appendChild(iframe);
//     videoCaption.appendChild(title);
//     videoCaption.appendChild(description);
    
//     videoItem.appendChild(videoContainer);
//     videoItem.appendChild(videoCaption);
    
//     return videoItem;
// }

// /**
//  * Configura os filtros de categoria
//  */
// function setupCategoryFilters() {
//     const categoryButtons = document.querySelectorAll('.category-btn');
//     const galleryItems = document.querySelectorAll('.gallery-item');
    
//     categoryButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Remover classe ativa de todos os botões
//             categoryButtons.forEach(btn => btn.classList.remove('active'));
            
//             // Adicionar classe ativa ao botão clicado
//             this.classList.add('active');
            
//             // Obter categoria selecionada
//             const selectedCategory = this.getAttribute('data-category');
            
//             // Filtrar itens da galeria
//             document.querySelectorAll('.gallery-item').forEach(item => {
//                 if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
//                     item.style.display = 'block';
//                     // Animar entrada com fade
//                     setTimeout(() => {
//                         item.style.opacity = '1';
//                         item.style.transform = 'scale(1)';
//                     }, 50);
//                 } else {
//                     item.style.opacity = '0';
//                     item.style.transform = 'scale(0.8)';
//                     setTimeout(() => {
//                         item.style.display = 'none';
//                     }, 300);
//                 }
//             });
//         });
//     });
// }

// /**
//  * Inicializa o Fancybox para a visualização de imagens
//  */
// function initFancybox() {
//     Fancybox.bind('[data-fancybox="gallery"]', {
//         animationEffect: "fade",
//         transitionEffect: "fade",
//         buttons: [
//             "zoom",
//             "slideShow",
//             "fullScreen",
//             "thumbs",
//             "close"
//         ]
//     });
// }

// /**
//  * Configura as animações para os itens da galeria
//  */
// function setupAnimations() {
//     // Animar itens da galeria no scroll
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate');
//             }
//         });
//     }, {
//         threshold: 0.1
//     });
    
//     document.querySelectorAll('.gallery-item, .video-item').forEach(item => {
//         observer.observe(item);
//     });
// }