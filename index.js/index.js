const link=("www.thecocktaildb.com/api/json/v1/1/random.php")
const slink=('www.thecocktaildb.com/api/json/v1/1/search.php?s')
document.addEventListener("DOMContentLoad",()=>{
   //Data on all fish
   const datayanav=document.getElementById("fishinfo")
   const categorydata=document.getElementById("category-link")
   const serchresult=document.getElementById("serch-result")
   //Data on serach
   const serachdata=document.getElementById("searchBtn")
   const searchform=document.getElementById("search-form")
   //click events for search
   searchform.addEventListener('click',()=> {
      datayanav.style.display="none"
      categorydata.style.display="none"
      serchresult.style.display="none"
   })
   //click events for searchbutton
   serachdata.addEventListener('click',()=>{
      datayanav.style.display="none"
      categorydata.style.display="none"
      serchresult.style.display="none"
    })
    //search submit listener
    searchform.addEventListener('submit',()=>{
      e.preventDefault();
      const query = serachdata.value
      searchmeal(query)
      datayanav.style.display="none"
      categorydata.style.display="none"
      serchresult.style.display="none"
    })
    //create returned card fish iformation
    const createfish = (image,Namee ,infor)
    const cardfish = document.createElement('div')
    cardfish.classList.add('card','col-12' ,'px-0', 'mb-3')
    const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'px-0', 'mb-3')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-6')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-6', 'card-body')

        const fishImg = document.createElement('img')
        fishImg.classList.add('card-img', 'h-100')
        fishImg.src = image
        fishImg.objectFit = 'cover'

        const fishTitle = document.createElement('h5')
        fishTitle.classList.add('card-title')
        fishTitle.innerText = Namee

        const fishDescription = document.createElement('p')
        fishDescription.classList.add('card-text')
        fishDescription.innerText = infor
        //deploying 
        bodyDiv.appendChild(fishTitle)
        bodyDiv.appendChild(fishDescription)

        imgDiv.appendChild(fishImg)
        rowDiv.appendChild(fishDescription)

        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
   })

        //load 
        const loadfish = () => {
         fetch(link)
             .then((res) => res.json())
             .then((data) =>{
                const Namee = drinks.strDrink
                  const infor = strIntructions
                  const image = strDrinkThumb
                  const fishElement = createRandomMeal(image, Namee, infor)
                  datayanav.appendChild(fishElement)
              }
            )}
             const createSearchResults = (name, image,) => {
              const rootDiv = document.createElement('div')
              rootDiv.classList.add('col-3', 'p-1')
      
              const cardDiv = document.createElement('div')
              cardDiv.classList.add('card', 'px-0', 'h-100')
      
              const fishImg = document.createElement('img')
              fishImg.classList.add('card-img-top')
              fishImg.src = image
      
              const fishTitle = document.createElement('h6')
              fishTitle.classList.add('p-2')
              fishTitle.innerText = name
              cardDiv.appendChild(fishImg)
              cardDiv.appendChild(fishTitle)
              rootDiv.appendChild(cardDiv)
              return rootDiv
             }
             
        
             
             
             loadfish(); 