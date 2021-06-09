const getUrl = document.location.search;
const para = new URLSearchParams (getUrl);
const id = para.get("id")




const api = `https://camillaatek.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const posts = document.querySelector(".blog");


 fetch(api)
     .then(response => response.json())
     .then(data => universe(data))
     .catch(error => console.error(error))
  

const universe = (blog) => {
     console.log(blog);
     posts.innerHTML = "";
     document.title  = `The Universe | ${blog.title.rendered}`
     
     let images = blog._embedded["wp:featuredmedia"]
     for (image of blog._embedded["wp:featuredmedia"]){
        postDiv = ` 
        <div class="info">
        <div class="top">
        <h1>${blog.title.rendered}</h1>
        <img  class= "buildfunk" src="${image.source_url}" alt="image">
        </div>
        <p>${blog.content.rendered}</p>
       </div>
       `;
       posts.innerHTML += postDiv;
       
       }
}