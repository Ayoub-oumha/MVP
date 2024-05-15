/** 
 * script picturs in sproduct.html
 * **/
let bigImg = document.getElementById("ImgBig")
let imgShoiwngDetails = document.querySelectorAll("#img-dt")





imgShoiwngDetails.forEach(element => {
    element.addEventListener(("click") , function(){
        bigImg.src = element.src ;
    })
});


/**
 * click on image and open sproduct.html
 */
let linkProducts = document.querySelectorAll(".img-of-product");
for (let i = 0; i < linkProducts.length; i++) {               
    linkProducts[i].addEventListener("click", function(){
        
        window.sessionStorage.setItem("number-of-product", i );
        // Open the new page 
        open("./sproduct.html", "_self");
        
    });
}
/**
 * variables of drtails price and title and images
 */
let titlePro = document.getElementById("title") ;
let detailPro = document.getElementById("detail") ;
let price = document.getElementById("price") ;
let img1 = document.querySelector(".img1") ;
let img2 = document.querySelector(".img2") ;
let img3 = document.querySelector(".img3") ;
let Bigimg = document.querySelector(".BigImg") ;





// read json

fetch('./dataP.json')
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Access the data
                let numberOfproduct = parseInt(sessionStorage.getItem("number-of-product"))
                
                titlePro.textContent = data[numberOfproduct].title ;
                detailPro.textContent = data[numberOfproduct].details;
                price.textContent = data[numberOfproduct].price ;
                
                Bigimg.src = data[numberOfproduct].imag1
                img1.src = data[numberOfproduct].imag1
                img2.src = data[numberOfproduct].imag2
                img3.src = data[numberOfproduct].imag3
                
        })
        .catch(error => console.error('Error:', error)); // Handle errors

// add product
// Check if the item already exists in localStorage
if (!localStorage.getItem('numberOfclick')) {
    // If it doesn't exist, set its initial value to 0
    localStorage.setItem('numberOfclick', '0');
}

let buttonAdd = document.getElementById("add") 
buttonAdd.onclick = function() {
    // let numberOfproduct = parseInt(sessionStorage.getItem("number-of-product"))
    let nn = localStorage.getItem("numberOfclick")
    localStorage.setItem(`titleP${nn}` , titlePro.textContent)
    localStorage.setItem(`PricP${nn}` , price.textContent)
    localStorage.setItem(`imgP${nn}` , Bigimg.src)
    
    // localStorage.setItem("numberOFclick" , numberOfclick)
    // // localStorage.setItem(`ID` , numberOfproduct)

    nn++ ;
    localStorage.setItem("numberOfclick" , nn)
    
}