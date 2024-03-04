const acceskey = "vfiKHxhXMzIVsq5AawwjC5qq2rhdQdD4mteEmxr2SG4"
const search_btn = document.querySelector("#search-btn");
const  search_box = document.querySelector("#search-box");
const btn = document.querySelector(".btn");
const search_result= document.querySelector("#search-result");
const show_more  = document.querySelector("#show-more-btn");

let keyword ="";
let page=1;

async function seachImage(){
    keyword =search_box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
     if(page ===1){
     search_result.innerHTML = "";
      }
    const results = data.results;
    
         results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imagelink = document.createElement("a")
        imagelink.href = result.links.html;
        imagelink.target = "_blank"
        imagelink.appendChild(image);
        search_result.appendChild(imagelink);
    })
    show_more.style.display = "block"
}



search_btn.addEventListener("submit" ,(e) =>{
   e.preventDefault();
   page =1;
   seachImage();
})


show_more.addEventListener (("click") , ()=>{
   page++;
   seachImage();
})