// button of show more product in html.shop
let btnSwith1 = document.getElementById("btnSwitsh1")
let numberOfpage = document.getElementById("nOfPage")
let btnSwith2 = document.getElementById("btnSwitsh2")
let productPage1 = document.querySelectorAll(".pr-page1")
let productPage2 = document.querySelectorAll(".pr-page2")

btnSwith1.addEventListener("click" , ()=>{
    productPage2.forEach(ele =>{
        ele.style.display = "none";
    })
    productPage1.forEach(ele =>{
        ele.style.display = "block";
    })
    numberOfpage.textContent = "1"
})
btnSwith2.addEventListener("click" , ()=>{
    productPage1.forEach(ele =>{
        ele.style.display = "none";
    })
    productPage2.forEach(ele =>{
        ele.style.display = "block";
    })
    numberOfpage.textContent = "2" ;

    window.scrollTo({
        top: 700,
        behavior: 'smooth' // Smooth scrolling behavior
    });
})

/** 
 * script picturs in sproduct.html
 * **/
// let linkProducts = document.querySelectorAll(".img-of-product")
// console.log(linkProducts)
// fetch('../dataP.json')
//         .then(response => response.json()) // Parse the JSON response
//         .then(data => {
//             // Access the data
//             linkProducts.forEach(element => {
//                 element.addEventListener(("click") , function(){
//                     console.log("ho")
//                     open("../sproduct.html" ,  "_self")
//                 })
//             });

//         })
//         .catch(error => console.error('Error:', error)); // Handle errors