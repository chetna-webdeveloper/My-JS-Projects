// const api_url="https://api.quotable.io/random"
let quote = document.getElementsByClassName("quote")
let author = document.getElementById("author")
let text = document.getElementById("text")


 function generateQuote(){
   
         fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       text.innerHTML = data[Math.floor(((Math.random()*13)+2))].text
        author.innerHTML = data[Math.floor(((Math.random()*13)+2))].author
        // console.log(data[0])
        console.log(data[Math.floor(((Math.random()*13)+2)>15 ?"":"5")])
        // console.log()



    });
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+text.innerHTML+"----by " + author.innerHTML,"Tweet Window","width=600,height=300")
}