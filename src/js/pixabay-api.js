import axios from 'axios';  

const API_KEY = '49384745-99fbe35ac45d1d7712b9c9b0c'; 
const BASE_URL = 'https://pixabay.com/api/';  

export const fetchImages = async (query) => {  
  try {  
    const response = await axios.get(BASE_URL, {  
      params: {  
        key: API_KEY,  
        q: query,  
        image_type: 'photo',  
        orientation: 'horizontal',  
        safesearch: true,  
      },  
    });  
    return response.data.hits; 
  } catch (error) {  
    console.error('Error fetching images:', error); 
    throw error;  
  }  
};  