const accesskey = "V7uu0K4qFztn9cL-SLQ9MiVHE-HwnRk4-LYaX_nDFTo"
const searchForm = document.getElementById("search-form")
const searchInput = document.getElementById("search-input")
const searchResult = document.getElementById("search-result")
const showMore = document.getElementById("show-more")

let keyword = "";
let page = 1;

try {
    async function searchImages() {
        keyword = searchInput.value;
        const url = `https://api.unsplash.com/search/photos?${page}&query=${keyword}&client_id=${accesskey}&per_page=12`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        if(page===1){
            searchResult.innerHTML="";
        }

        const results = data.results;
        // console.log(results)
        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            console.log(image)
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank"
            imageLink.appendChild(image);
            // console.log(imageLink)

           searchResult.appendChild(imageLink);
        //    console.log(searchResult)
        })
        showMore.style.display="block"

    }
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        page = 1;
        searchImages()
    })
    showMore.addEventListener("click",()=>{
        page ++;
        searchImages();
    })

} catch (error) {
    console.log(error)
}

