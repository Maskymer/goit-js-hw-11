let lightbox;  

export const renderImages = (images) => {  
    const gallery = document.querySelector('.gallery');  
    clearGallery(); 
    gallery.innerHTML = images.map(image => `  
        <li class="gallery-item">  
            <a href="${image.largeImageURL}">  
                <img src="${image.webformatURL}" alt="${image.tags}" />  
            </a>  
            <p>Likes: ${image.likes}</p>  
            <p>Views: ${image.views}</p>  
            <p>Comments: ${image.comments}</p>  
            <p>Downloads: ${image.downloads}</p>  
        </li>  
    `).join('');  

    lightbox = new SimpleLightbox('.gallery a', {  
        captionsData: 'alt',  
        captionDelay: 250,  
    });  

    lightbox.refresh();  
};  

export const clearGallery = () => {  
    const gallery = document.querySelector('.gallery');  
    gallery.innerHTML = '';  
};  

export const showLoader = () => {  
    const loader = document.querySelector('.loader');  
    loader.style.display = 'block';  
};  

export const hideLoader = () => {  
    const loader = document.querySelector('.loader');  
    loader.style.display = 'none';  
};  