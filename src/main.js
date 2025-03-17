import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox'; 
import 'simplelightbox/dist/simple-lightbox.min.css'; 
import { fetchImages } from './js/pixaby-api';
import {  
  renderImages,  
  showLoader,  
  hideLoader,  
  clearGallery,  
} from './js/render-functions';

const form = document.querySelector('.form');  

form.addEventListener('submit', async (event) => {  
  event.preventDefault(); 
  const searchText = event.target.elements['search-text'].value.trim(); 

  if (!searchText) {  
    iziToast.error({  
      title: 'Error',  
      message: 'Please enter a search term.',  
    });  
    return;
  }  

  clearGallery();  
  showLoader();  

  try {  
    
    const images = await fetchImages(searchText);  
    if (images.length === 0) {
      iziToast.warning({  
        title: 'No Results',  
        message: 'Sorry, there are no images matching your search query. Please try again!',  
      });  
      return;  
    }  
    renderImages(images); 
  } catch (error) {  
    
    iziToast.error({  
      title: 'Error',  
      message: 'An error occurred while fetching images.',  
    });  
  } finally {  
    
    hideLoader();  
  }  
});  