const Link="https://www.thecocktaildb.com/api/json/v1/1/random.php"
const slink="https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
const clink="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
   //Data on all drinks
   const datayanav=document.getElementById("drinks")
   const categorydata=document.getElementById("catgory")
   const serchresult=document.getElementById("serch-result")
   const categorylink = document.getElementById("category-link")
   //Data on serach
   const serachdata=document.getElementById("search")
   const searchform=document.getElementById("search-form")
   const home = document.getElementById('navbarNavDarkDropdown')


       categorylink.addEventListener('click', () => {
        // hide 
        datayanav.style.display = "none"
       // hide search page
        serchresult.style.display = "none"
        // show categories
        categorydata.removeAttribute('hidden')
        categorydata.style.display = "flex"
    })
    home.addEventListener('click', () => {
      // hide categories, search and countries
      datayanav.style.display = "flex"
      categorydata.style.display = "none"
      serchresult.style.display = "none"

  })


    //search submit listener
    searchform.addEventListener('submit',(e)=>{
      e.preventDefault();
      const query = serachdata.value
      searchDrink(query)
      datayanav.style.display="none"
      categorydata.style.display="none"
      serchresult.style.display = "flex"
      serchresult.removeAttribute('hidden')
  
      
    
    })
    //create returned card drink iformation
    const createeFish = (image, Namee, infor) => {
  
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

        const fishTitle = document.createElement('h3')
        fishTitle.classList.add('card-title')
        fishTitle.innerText = Namee

        const fishDescription = document.createElement('p')
        fishDescription.classList.add('card-text')
        fishDescription.innerText = infor
        //deploying 
         bodyDiv.appendChild(fishTitle)
         bodyDiv.appendChild(fishDescription)

         imgDiv.appendChild(fishImg)
         rowDiv.appendChild(imgDiv)

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
   //categorycreate
   const createCategory = (Namee,image) => {

    const rootDiv = document.createElement('div')
    rootDiv.classList.add('col-4', 'p-1')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card', 'col-12', 'p-2')

    const cImg = document.createElement('img')
    cImg.classList.add('card-img-top')
    cImg.src = image

    const cTitle = document.createElement('h4')
    cTitle.classList.add('card-title')
    cTitle.innerText = Namee

    // append 
    cardDiv.appendChild(cImg)
    cardDiv.appendChild(cTitle)
   
    rootDiv.appendChild(cardDiv)

    return rootDiv

}


        //load 
        const loadFish = () => {
         fetch(Link)
             .then((res) => res.json())
             .then((data) =>{
            
                   const drinkdata = data.drinks[0]
                   const Namee = drinkdata.strDrink
                   const infor = drinkdata.strInstructions
                   const image = drinkdata.strDrinkThumb
                   const fishElement = createeFish(image, Namee, infor)
                   datayanav.append(fishElement)
               
             })}

             //categories
             const categories = () => {
               fetch(clink)
              .then((res)=> res.json())
              .then((data) => {
                const cdata = data.drinks
                const celements = cdata.map(
                    catgory => createCategory(catgory.strDrinkThumb , catgory.strDrink)
                )
                categorydata.append(...celements)
            })
      }

            
            // search data
            const searchDrink = (drink) => {
              fetch(`${slink}${drink}`)
                   .then((response) => response.json())
                   .then((data) => {
                      const drinkdata = data.drinks
                      const searchResults = drinkdata.map(
                          drinkdata => {
                              const Namee = drinkdata.strDrink
                              const image = drinkdata.strDrinkThumb
                              console.log(Namee)
                              return createSearchResults(Namee, image)
                      
                  })
                  serchresult.replaceChildren(...searchResults)
                
            })}
        
             
              loadFish(); 
              categories();
               