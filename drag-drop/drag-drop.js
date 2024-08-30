
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("rightbox");
let leftBox = document.getElementById("leftbox");

for ( list of lists) {
    list.addEventListener("dragstart",function (e) {
        let selected= e.target;
        rightBox.addEventListener("dragover",function (e) {
            e.preventDefault()
        })
        rightBox.addEventListener("drop",function(){
            rightBox.appendChild(selected);
            selected=null
                 })
    })
for ( list of lists) {
    list.addEventListener("dragstart",function (e) {
        let selected= e.target
        leftBox.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected)
            selected=null
        })
        
    })
}

}
