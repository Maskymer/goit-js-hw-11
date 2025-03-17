/* empty css                      */import{a as u,i as n}from"./assets/vendor-DHk-P_L5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d="49384745-99fbe35ac45d1d7712b9c9b0c",m="https://pixabay.com/api/",f=async r=>{try{return(await u.get(m,{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){throw console.error("Error fetching images:",o),o}};let i;const p=r=>{const o=document.querySelector(".gallery");l(),o.innerHTML=r.map(t=>`  
        <li class="gallery-item">  
            <a href="${t.largeImageURL}">  
                <img src="${t.webformatURL}" alt="${t.tags}" />  
            </a>  
            <p>Likes: ${t.likes}</p>  
            <p>Views: ${t.views}</p>  
            <p>Comments: ${t.comments}</p>  
            <p>Downloads: ${t.downloads}</p>  
        </li>  
    `).join(""),i=new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250}),i.refresh()},l=()=>{const r=document.querySelector(".gallery");r.innerHTML=""},y=()=>{const r=document.querySelector(".loader");r.style.display="block"},g=()=>{const r=document.querySelector(".loader");r.style.display="none"},h=document.querySelector(".form");h.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(!o){n.error({title:"Error",message:"Please enter a search term."});return}l(),y();try{const t=await f(o);if(t.length===0){n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t)}catch{n.error({title:"Error",message:"An error occurred while fetching images."})}finally{g()}});
//# sourceMappingURL=index.js.map
