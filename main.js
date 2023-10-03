let content = document.querySelector('.content-sub')


let array = [
    {
        image: "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&w=1000&q=80",
        title: "DIGITAL DESIGN //",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus",

    },
    {
        image: "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&w=1000&q=80",
        title: "WEB DEVELOPMENT //",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus",
        
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&w=1000&q=80",
        title: "WE LOVE YOU //",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus",
        
    }
]


const handleRender = () => {
    let newElement = document.createElement('div')
    newElement.className = 'contents'
    array.forEach(element => {
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

handleRender()