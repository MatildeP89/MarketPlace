
let spinner=document.getElementById("spinner");

addEventListener("DOMContentLoaded", ()=>fetchData())

function fetchData(){
    let url="https://striveschool-api.herokuapp.com/api/product/";
    spinner.style.display="block";
    fetch(url,{
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcwMWZiOGY2ZGQ3ODAwMTU1MWU4MjciLCJpYXQiOjE3MzU0MDE0MDAsImV4cCI6MTczNjYxMTAwMH0.6d3RUtwl34nmTMJRvccTuCwfeFWsSa-kYyvLG0O5gp8"
            }})
            .then(response=>response.json())
            .then(data=>{
                let main=document.getElementById("main")
                main.innerHTML+=data.map(element=>`
<div class="col-sm-12 col-md-6 col-lg-3 mt-3"> 
<div class="card"> 
<img src="${element.imageUrl}" class="card-img-top">
 <div class="card-body"> 
 <h5 class="card-title">${element.name}</h5>
  <p class="card-text">${element.description}</p>
   <p class="card-text">${element.price.toFixed(2)}€</p>
   <a href="proddetails.html?_id=${element._id}">Details</a> 

    </div> 
    </div> 
    </div>`).join("")      
    spinner.style.display="none";
                         
                               
                
                console.log(data)}) 
                .catch(error=>console.log(error))}
                    