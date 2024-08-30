let progress= document.getElementById("progress")
let song= document.getElementById("song")
let play= document.getElementById("play")
let currentTimeDisplay= document.getElementById("currentTime")
let actualTimeDisplay = document.getElementById("duration")
let timeLeftDisplay = document.getElementById("timeLeft")

 song.onloadedmetadata = function(){
    progress.max= song.duration;
    progress.value=song.currentTime;
 }
 function playPause(){
    if (play.classList.contains("fa-pause")) {
        song.pause()
        play.classList.add("fa-play")
        play.classList.remove("fa-pause")
    }else{
        song.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }
 }
 if(song.play()){
     setInterval(()=>{
        progress.value= song.currentTime
     },500)
 }
 progress.onchange= function(){
    song.play()
    song.currentTime= progress.value;
    play.classList.remove("fa-play")
        play.classList.add("fa-pause")
 }
// forward.onclick=function (){
// setInterval(()=>{
//    song.play()
// },10000)
// }

function forward(){
if (song.currentTime + 10 < song.duration) {
    song.currentTime += 10; // Move forward 10 seconds
} else {
    song.currentTime = song.duration; // Move to the end of the song if less than 10 seconds remain
}
}
function backward(){
    if(song.currentTime -10< song.duration){
        song.currentTime-=10;
    }else{
        song.currentTime=song.duration
    }
}

function formatTime(seconds){
  const minutes= Math.floor(seconds/60);
  const secs= Math.floor(seconds%60);
  return `${minutes<10?"0":""}${minutes}:${secs<10?"0":""}${secs}`
}

song.addEventListener("timeupdate",()=>{
    const currentTime= song.currentTime;
    currentTimeDisplay.textContent=formatTime(currentTime)
})



song.addEventListener("loadedmetadata",()=>{
    const actualTime= song.duration;
    actualTimeDisplay.textContent= formatTime(actualTime)
}) 

song.addEventListener("timeupdate",()=>{
    let currentTime= song.currentTime;
    let duration= song.duration
  const timeLeft= duration-currentTime
  timeLeftDisplay.textContent= formatTime(timeLeft)
})
