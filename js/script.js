// button of nav 
let btn = document.querySelector(".clos-btn") ;
let ul = document.querySelector("nav ul") ; 
let btnNav = document.getElementById("btn-nav") ;


btn.onclick = function (){
    ul.style.display = "none"
}
btnNav.onclick = function (){
    ul.style.display = "block" ;
    
}


// number of product that i add 
let nClick = localStorage.getItem("numberOfclick") ;
let span = document.querySelectorAll(".span")

span.forEach((span)=>{
    span.textContent = nClick
})