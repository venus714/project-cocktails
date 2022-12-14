const link=("https://www.fishwatch.gov/api/species")
document.addEventListener("DOMContentLoad",()=>{
   //Create all fish 
   const createfish=()=>{
      const carddiv = document.createElement("div"); 
      carddiv.classList.add('card','col-12')
   }














fetch(link)
.then(res =>res.json())
.then((data) =>{
    console.log(data)})
})



