 let thanksMsg = document.getElementById("thanksMsg")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxmm-Y1ZR1mGb7Re2fvOK20h1xhyrmZbo3_MT4tKze4BFC2HXA_vip5IW9K7ZBu36BarQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        thanksMsg.innerHTML="Thank You for subscribing!"
        setTimeout(()=>{
        thanksMsg.innerHTML=""
               
              },2000)
              form.reset()
      })
      .catch(error => console.error('Error!', error.message))

    //   let thanks = document.createElement("span")    
    //   thanks.classList.add("thanksMsg")
    //   thanks.innerHTML= "Thank You for Subscribing"
    //   input.appendChild(thanks)
    //   setTimeout(()=>{
    //      thanks.remove()
    //   },2000)
  })
