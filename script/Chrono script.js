let chrono   = document.getElementById("chrono") ; 
let start    = document.querySelector(".btn1") ;
let stopBtn  = document.querySelector(".btn2") ;
let rest     = document.querySelector(".btn3") ; 
let saveBtn = document.querySelector(".btn4") ;

let divChronosave = document.querySelector(".chorono-save") ;
console.log(divChronosave)


let mlSecond = 1 ;
let [h , m , s , ms]= [0, 0 , 0 , 0] ;
let [hour , minuts , secons , mlSecons] = [0, 0 , 0 , 0]  ;

let Interval = null ;

start.addEventListener("click" , ()=>{
    Interval = setInterval(mainFunction , 10) ;

}) ;


let mainFunction = function(){
    ms = ms+1 ;
    if(ms == 100) {
        s = s+1
        ms = 0 ;
    } ;
    if(s == 60){
        m = m + 1 ;
        s = 0 ;
    } ;
    if(m == 60){
        h = h + 1 ;
        m = 0 ;
    } ;
    hour = h < 10 ? "0" + h : h ;
    minuts = m < 10 ? "0" + m : m ;
    secons = s < 10 ? "0" + s : s ;
    mlSecons = ms < 10 ? "0" + ms : ms ;
    chrono.textContent = `${hour}:${minuts}:${secons}:${mlSecons}`
}
stopBtn.addEventListener("click", function(){
    clearInterval(Interval)
})
rest.addEventListener("click" , ()=>{ 
    clearInterval(Interval)
    ms = 0 ;
    s = 0 ;
    m = 0 ;
    h = 0
    chrono.textContent = `00:00:00:00`
    divChronosave.textContent = ""

} ) ;

saveBtn.addEventListener("click" ,()=>{
    
    let  para = document.createElement("p");
    
    let  node = document.createTextNode(chrono.textContent);
    para.appendChild(node);
    divChronosave.appendChild(para);
} )
