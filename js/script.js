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
