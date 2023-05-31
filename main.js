let display = document.getElementById('display')
let bubbles

let x = 0
let timerID = setInterval(() => {
    bubbles = document.createElement('div')
    bubbles.classList.add('bubble')
    display.appendChild(bubbles)

    bubbles.style.left = Math.floor(Math.random() * 80) + '%'
    
    if(display.children.length == 10) {
        clearInterval(timerID)
    }
    
    bubbles.addEventListener('click', (e) => {
        x++
        e.target.remove()
        score.innerText = x 
    })

    if(score.innerText >= 10) {
        bubbles.style.animationDuration = '5s'
    }

    
    
}, 1000);


