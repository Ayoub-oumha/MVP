
let tbody = document.getElementById("tbody") ;
let numberP= localStorage.getItem("titleP0");
let th = document.createElement("tr")
let dataTable = `
<th><i id="btnAnnule" class="fa-regular fa-circle-xmark"></i></th>
<th><img src="images-2/img 1.jpg"  alt=""></th>
<th><h3>${numberP}</h3></th>
<th><div>120</div></th>
<th><input type="number" min="1" max="5" value="1"></th>
<th><div>120</div></th>
`

th.innerHTML = dataTable

tbody.appendChild(th)

let btnAnuuler = document.getElementById("btnAnnule")
th.onclick =  function(){
    console.log("hllo")
}