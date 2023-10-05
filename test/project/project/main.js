let content = document.querySelector('.content-sub')

let contentImage = document.querySelector('.content-subs')
let array = [
    {
        image: "./images/laptop.png",
        title: "DIGITAL DESIGN //",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus",

    },
    {
        image: "./images/right.png",
        title: "WEB DEVELOPMENT //",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus",
        
    },
    {
        image: "./images/love.png",
        title: "WE LOVE YOU //",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus",
        
    },
 
      
    
]
let value =   [
    {
        image: "./images/Layer 12.jpg",
        title: "CREATIVE MINDS", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero."
    },
    {
        image: "./images/Layer 13.jpg",
        title: "THINK ALIKE",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero."
    },
    {
        image: "./images/Layer 15.jpg",
        title: "PIXEL PERFECTION",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero."
    }
]


const handleRender = (data) => {
    let newElement = document.createElement('div')
    newElement.className = 'contents'
    data.forEach(element => {
        newElement.innerHTML += `
        <div class="contain">
            <div class="app-image">
                <img src="${element.image}" alt="image" class="image">
            
            
            </div>
            <div class="app-content">
            <div class="sub-title">
                <h3>${element.title}</h3>
            
            
            </div>
            <div class="app-context">
                <p class="text-contents">${element.text}</p>
            
            
            </div>
            </div>
            </div>
        `

    })
    content.appendChild(newElement)
}

handleRender(array)


const handleEvent = () => {
    let newElement = document.createElement('div')
    newElement.className = 'contentss'
    value.forEach(element => {
        newElement.innerHTML += `
        <div class="contains">
            <div class="app-images">
                <img src="${element.image}" alt="image" class="imagess">
            
            
            </div>
            <div class="app-content">
            <div class="sub-title">
                <h3 class="text-h3">${element.title}</h3>
            
            
            </div>
            <div class="app-context">
                <p class="text-contentss">${element.text}</p>
            
            
            </div>
            </div>
            </div>
        `

    })
    contentImage.appendChild(newElement)
    
}
handleEvent()