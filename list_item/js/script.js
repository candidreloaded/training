var itemCounter = 1;
var listItems = document.querySelectorAll("#our-list li");
var headTitle = document.querySelector("#our-headline");
var list = document.querySelector("#our-list");
var button = document.querySelector("#our-button");

list.addEventListener("click", changeTitle);

function changeTitle (e) {
    if (e.target.nodeName == "LI"){
        headTitle.innerHTML =  e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++){
   e.target.parentNode.children[i].classList.remove("active");
}
        e.target.classList.add("active");
    }
};

button.addEventListener("click", addNewItem);

function addNewItem (){
    list.innerHTML += "<li>New Item " + itemCounter + "</li>";
    itemCounter++;
}




// var newItemCounter = 1;
//  var ourList = document.getElementById("our-list");
// var ourButton = document.getElementById("our-button");
// var ourHeadline = document.getElementById("our-headline");
// // var listItems = document.getElementById("our-list").getElementsByTagName("li");

//  ourList.addEventListener("click", activateFunction);

// function activateFunction(e) {
//    if (e.target.nodeName == "LI"){
//         ourHeadline.innerHTML = e.target.innerHTML;
//     for (i = 0; i < e.target.parentNode.children.length; i++){
//     e.target.parentNode.children[i].classList.remove("active");
//     }
//     e.target.classList.add ("active");
//    }
// }

// ourButton.addEventListener("click", addNewItem);

// function addNewItem (){
//     ourList.innerHTML += "<li>New item " + newItemCounter + "</li>";
//     newItemCounter++;
// }