let tbodyTbble = document.getElementById("tbody") ;
let numberOfclick = localStorage.getItem("numberOfclick")



for(let i = 0 ; i < numberOfclick   ; i++) {
    let tr = document.createElement("tr")
    let th1 = document.createElement("td")
    let th2 = document.createElement("td")
    let th3 = document.createElement("td")
    let th4 = document.createElement("td")
    th4.className = "thOfPrice"
    let imgEle = document.createElement("img")

    // From local storage
    let name = localStorage.getItem("titleP"+i) ;
    let price = localStorage.getItem("PricP"+i) ;
    let img = localStorage.getItem("imgP" + i)
    

    //icon
    let icon = document.createElement("i")
    icon.className = 'fa-regular fa-circle-xmark icon';
    


    



    imgEle.setAttribute("src" , img)
    th1.appendChild(icon)
    th2.appendChild(imgEle)
    th3.textContent = name ;
    th4.textContent = price ;


    tr.className = "trTableOne"
    tr.appendChild(th1 )
    tr.appendChild(th2 )
    tr.appendChild(th3 )
    tr.appendChild(th4 )
    tbodyTbble.appendChild(tr)
    
}

//var pf get icon
let icon = document.querySelectorAll(".icon")
let trTableOne = document.querySelectorAll(".trTableOne")

// variable of get price in html
let thOfPrice = document.querySelectorAll(".thOfPrice")
// var result
let totl1 = document.getElementById("Total1")
let totl2 = document.getElementById("Total2")
let finalePrice = 0 ;



for (let j = 0 ; j < icon.length ; j ++) {
    icon[j].onclick = function(){
       // finalePrice = finalePrice - parseInt(thOfPrice[0].textContent.slice(1)) ;
        localStorage.removeItem("titleP"+j) ;
        localStorage.removeItem("PricP"+j) ;
        localStorage.removeItem("imgP" + j) ;
        let nClick = localStorage.getItem("numberOfclick") ;
        nClick-- ;
        localStorage.setItem("numberOfclick" , nClick) ;
        trTableOne[j].remove() ;

    }
}



// lop for price

console.log (parseInt(thOfPrice[0].textContent.slice(1)) )
for(let k = 0 ; k < thOfPrice.length ; k++ ) {
    finalePrice = parseInt(thOfPrice[k].textContent.slice(1)) + finalePrice ;
    
}
console.log(finalePrice)

// if(finalePrice == NaN) {
//     totl1.textContent = "$" +0
// }
// else {
//     totl1.textContent = "$" +finalePrice
// }
// totl1.textContent = "$" +finalePrice
// totl2.textContent = totl1.textContent

