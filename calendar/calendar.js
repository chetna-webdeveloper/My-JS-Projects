const date= document.getElementById("date")
const day= document.getElementById("day")
const month= document.getElementById("month")
const year= document.getElementById("year")

const actualDate= new Date()
// console.log(actualDate)
const weekdays= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
const months=["january","februray","march","april","may","june","july","august","september","october","november","december"]

date.innerHTML = (actualDate.getDate()<10?"0":"")+actualDate.getDate()
day.innerHTML=weekdays[actualDate.getDay()]
month.innerHTML= months[actualDate.getMonth()]
year.innerHTML=actualDate.getFullYear()