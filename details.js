let spinner=document.getElementById("spinner");
function spinneron(){
    spinner.style.display="block";
}

function spinneroff(){
    spinner.style.display="none";
}

document.addEventListener("DOMContentLoaded",function(){
    const params = new URLSearchParams(window.location.search);
    const productid= params.get('_id');

    if(!productid){document.getElementById("proddetails").innerHTML=`<h4> No ID inserted</h4>`}

    let url="https://striveschool-api.herokuapp.com/api/product"
let authorization= {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8"
        }}
    spinneron();
    fetch(url, authorization)
    .then(response=>response.json())
    .then(data=>{
let producttofind=data.find(product=>product._id === productid)
let prodcontainer=document.getElementById("proddetails");

if(producttofind){
    prodcontainer.innerHTML+=
    `

    <div class="col-3 p-0"> <img src="${producttofind.imageUrl}" class="detailspic img-fluid" alt="product image"> </div>
    
    <div class="col-4 details m-1"> 
    <h3> ${producttofind.name} </h3> 
    <p> ${producttofind.description} </p> 
     <p> ${producttofind.price.toFixed(2)} €</p> 
    </div>    

    `
spinneroff();
}

else {prodcontainer.innerHTML=
    `<p> No product found</p>`;}
    console.log(data);  
spinneroff();
    })
                

    .catch(error=>prodcontainer.innerHTML=`<h3> ${error.message} </h3>`)

})