let spinner=document.getElementById("spinner");

function spinneron(){
    spinner.style.display="block";
}

function spinneroff(){
    spinner.style.display="none";
}

function fetchData(){
    let url="https://striveschool-api.herokuapp.com/api/product/";
spinneron();
fetch(url, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8"
        }
})
.then(raw=>raw.json())
.then(data=>{
    let dataDiv=document.getElementById("datadiv")
    dataDiv.style.display="block"
dataDiv.innerHTML=data.map(element=>`
    <table class="table table-striped p-2"> 
       <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Brand</th>
                <th>ImageURL</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${element._id}</td>
                <td>${element.name}</td>
                <td>${element.description}</td>
                <td>${element.brand}</td>
                <td>${element.imageUrl}</td>
                <td>${element.price.toFixed(2)}€</td>
            </tr>
        </tbody>
    </table>
    `).join("")
    spinneroff();

    console.log(data)})

.catch(error=>console.log(error))   
}



function addproduct(nameP, descriptionP, brandP, imageUrlP, priceP){
let url="https://striveschool-api.herokuapp.com/api/product/"
let objectP={     
    method:"POST",
    body:JSON.stringify({
        name:nameP,
        description:descriptionP,
        brand:brandP,
        imageUrl:imageUrlP,
        price:priceP
    }),
    
    headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8",
                "Content-type": 'application/json; charset=UTF-8'
                }}

    fetch(url,objectP)

    .then(response=>response.json())
    .then(raw=>console.log(raw))
    .catch(error=> console.log(error))

            }




function modifyproduct(idP, nameP, descriptionP, brandP, imageUrlP, priceP){
let url="https://striveschool-api.herokuapp.com/api/product/"+idP
let header={
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8"
        }}
fetch(url, header)
.then(response=>response.json())
.then(existingData=>{

const updatedObject={
    name: nameP || existingData.name,
    description: descriptionP || existingData.description,
    brand: brandP || existingData.brand,
    imageUrl: imageUrlP || existingData.imageUrl,
    price: priceP || existingData.price
}

let objectP= {
    method:"PUT",
    body: JSON.stringify(updatedObject),
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8",
        "Content-type": 'application/json; charset=UTF-8'
}};

fetch(url, objectP)
.then(response=>response.json())
.then(raw=>console.log(raw))
.catch(error=>document.getElementById("datadiv").innerHTML=`<h4>${error.message}</h4>`)
})
}


function deleteproduct(idP){
let url="https://striveschool-api.herokuapp.com/api/product/"+idP
let objectP={
    method:"DELETE",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8",
        "Content-type": 'application/json; charset=UTF-8'
        }}

        fetch(url, objectP)
        .then(response=>response.json())
        .then(raw=>console.log(raw))
        .catch(error=>console.log(error))
}


function addproductValues(){
let nameP=document.getElementById("nameF").value
let descriptionP=document.getElementById("descF").value
let brandP=document.getElementById("brandF").value
let imageUrlP=document.getElementById("imageF").value
let priceP=document.getElementById("priceF").value

addproduct(nameP, descriptionP, brandP, imageUrlP, priceP)

if(nameP && descriptionP && brandP && imageUrlP && priceP){ 
alert("Product added")
document.getElementById("nameF").value=""
document.getElementById("descF").value=""
document.getElementById("brandF").value=""
document.getElementById("imageF").value=""
document.getElementById("priceF").value=""
fetchData()}
}


function modifyproductValues(){
    let idP=document.getElementById("idF").value
    let nameP=document.getElementById("nameF2").value
    let descriptionP=document.getElementById("descF2").value
    let brandP=document.getElementById("brandF2").value
    let imageUrlP=document.getElementById("imageF2").value
    let priceP=document.getElementById("priceF2").value

    modifyproduct(idP, nameP, descriptionP, brandP, imageUrlP, priceP)

if(idP && (nameP || descriptionP || brandP || imageUrlP || priceP)) {

    alert("Product modified")
    document.getElementById("idF").value=""
    document.getElementById("nameF2").value=""
    document.getElementById("descF2").value=""
    document.getElementById("brandF2").value=""
    document.getElementById("imageF2").value=""
    document.getElementById("priceF2").value=""
    fetchData() }
}

function deleteproductValues(){
    let idP=document.getElementById("idF2").value
    deleteproduct(idP)
if(idP){
    alert("Product deleted from marketplace")
    document.getElementById("idF2").value=""
    fetchData()}
}
