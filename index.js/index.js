const Link="https://www.thecocktaildb.com/api/json/v1/1/random.php"
const slink='https//www.thecocktaildb.com/api/json/v1/1/search.php?s'
document.addEventListener("DOMContentLoad",()=>{
   //Data on all fish
   const datayanav=document.getElementById("drinks")
   const categorydata=document.getElementById("category-link")
   const serchresult=document.getElementById("serch-result")
   //Data on serach
   const serachdata=document.getElementById("search")
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
    searchform.addEventListener('submit',(e)=>{
      e.preventDefault();
      const query = serachdata.value
      searchDrink(query)
      datayanav.style.display="none"
      categorydata.style.display="none"
      serchresult.style.display="none"
      serchresult.removeAttribute('hidden')
    })
    //create returned card fish iformation
    const createeFish = (image, Namee, infor) => {
    
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
    }
   
   const createSearchResults = (Namee, image,) => {
    const rootDiv = document.createElement('div')
    rootDiv.classList.add('col-3', 'p-1')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card', 'px-0', 'h-100')

    const fishImg = document.createElement('img')
    fishImg.classList.add('card-img-top')
    fishImg.src = image

    const fishTitle = document.createElement('h6')
    fishTitle.classList.add('p-2')
    fishTitle.innerText = Namee


    cardDiv.appendChild(fishImg)
    cardDiv.appendChild(fishTitle)

    rootDiv.appendChild(cardDiv)
    return rootDiv
   }

        //load 
        const loadfish = () => {
         fetch(Link)
             .then((res) => res.json())
             .then((data) =>{
                  const drinkdata = data.drinks[0]
                   const Namee = drinkdata.strDrink
                   const infor = drinkdata.strIntructions
                   const image = drinkdata.strDrinkThumb
                   const fishElement = createeFish(image, Namee, infor)
                   datayanav.appendChild(fishElement)
               }
            )}
            //search data
            const searchDrink = (drink) => {
              fetch(`${slink}${drink}`)
                   .then((response) => response.json())
                   .then((data) => {
                      const drinkdata = drinkdata.strDrink
                      const searchResults = drinkdata.map(
                          drinkData => {
                              const Namee = drinkdata.strDrink
                              const image = drinkdata.strDrinkThumb
                              console.log(Namee)
                              return createSearchResults(Namee, image)
                      
                  })
                  serchresult.replaceChildren(...searchResults)
                
            })}
        
             
              loadfish(); 
            })
               