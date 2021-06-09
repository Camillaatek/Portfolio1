
    const api = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=3";
    
    const posts = document.querySelector(".blog");

   
   
    const universe = (blogs) => {
         console.log(blogs);
         
         let postDiv = ``
         for (blog of blogs) {
             
             let images = blog._embedded["wp:featuredmedia"]
             console.log(images);
             for (image of blog._embedded["wp:featuredmedia"]){
             postDiv = `  
             <div class= posts>
             <a href="details.html?id=${blog.id}"><img src="${image.source_url}" alt="bilde"></a>
             <a href="details.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
            </div>
            `;
            posts.innerHTML += postDiv;
            }
        }
    }  
     
    fetch(api)
         .then(response => response.json())
         .then(data => universe(data))
         .catch(error => console.error(error))
         

